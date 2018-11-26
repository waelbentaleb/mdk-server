import { Agent, Data } from '../../config/models';

export async function getAgents(req, res) {
  try {
    const agents = await Agent.find()

    return res.json(agents)

  } catch (error) {

    console.log(error)
    return res.status(500).json(error)
  }
}

export async function lastUpdate(req, res) {
  try {
    const data = await Data.findOne({ agent: req.params.id, fileType: 'image' }).sort({ createdAt: -1 })
    const lastUpdate = data.url.split('/').pop().split('_').pop().split('.j').shift()

    return res.json(lastUpdate)

  } catch (error) {

    console.log(error)
    return res.status(500).json(error)
  }
}
