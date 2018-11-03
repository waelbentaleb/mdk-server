import { Data, Agent } from '../../config/models';

export async function postData(req, res) {
  try {
    let agent = await Agent.findOne({ computerId: req.params.computerId })

    if (!agent)
      agent = await Agent.create({ computerId: req.params.computerId })

    const host = req.protocol + '://' + req.headers.host
    const url = req.files.map(file => host + '/reports/' + req.params.computerId + '/' + file.filename)[0]
    const fileType = url.split('.').pop() == 'txt' ? 'text' : 'image'

    await Data.create({
      agent: agent._id,
      url,
      fileType
    })

    return res.status(200).end()

  } catch (error) {

    console.log(error)
    return res.status(500).end()
  }
}

export async function getData(req, res) {
  try {

    let query = {
      agent: req.params.agent,
      fileType: req.params.type || 'image'
    }

    if (req.params.lastData) {
      const lastData = await Data.findOne({ _id: req.params.lastData })
      query.createdAt = { $lt: new Date(lastData.createdAt) }
    } 

    let data = await Data.find(query).sort({ createdAt: -1 }).limit(30)

    if (req.params.type == 'text')
      data = data.map(it => {
        it = it.toJSON()
        it.name = it.url.split('/').pop().split('_').pop().split('.').shift()
        return it
      })

    return res.json(data)

  } catch (error) {

    console.log(error)
    return res.status(500).end()
  }
}
