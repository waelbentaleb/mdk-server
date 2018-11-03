import { requireAuth, shouldSignIn } from '../../services/authServices'
import { signIn, signOut } from './authController'

export default function (router) {
  router.post('/signIn', shouldSignIn, signIn)
  router.put('/signOut', requireAuth, signOut)
}
