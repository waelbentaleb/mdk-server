import upload from '../../services/uploadService'
import { getData, postData } from './dataController'
import { requireAuth } from '../../services/authServices'

export default function (router) {
  router.get('/data/:agent/:type?/:lastData?', requireAuth, getData)
  router.post('/:computerId', upload, postData)
}
