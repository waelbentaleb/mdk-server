import _ from 'lodash'

export function signIn(req, res) {
  const user = _.pick(req.user, 'name','token')
  return res.json({ user: user })
}

export async function signOut(req, res) {
  try {
    delete req.user.token
    delete req.session.token
    await req.user.save()

    return res.status(204).end()

  } catch (error) {

    console.log(error)
    return res.status(500).end()
  }
}
