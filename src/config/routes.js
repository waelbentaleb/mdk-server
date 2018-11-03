import express from 'express'
const router = express.Router()

import staticRoute from '../components/static/staticRoute'
import authRoute from '../components/authorization/authRoute'
import dataRoute from '../components/data/dataRoute'
import agentRoute from '../components/agent/agentRoute'

staticRoute(router)
authRoute(router)
dataRoute(router)
agentRoute(router)

export default router
