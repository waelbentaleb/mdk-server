import { requireAuth } from '../../services/authServices'
import { getAgents, lastUpdate } from './agentController'

export default function (router) {
  router.get('/agents', requireAuth, getAgents)
  router.get('/agent/:id/lastUpdate', requireAuth, lastUpdate)
}
