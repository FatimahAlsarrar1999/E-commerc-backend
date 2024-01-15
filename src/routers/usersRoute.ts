import { Router } from 'express'

import {
  createUser,
  deleteSingUser,
  getAllUsers,
  getSingleUser,
  processRegisterUser,
  updateUser,
  activateUser,
  banUser,
  unBanUser,
  forgetPassword,
  resetPassword
} from '../controllers/userController'
import { uploadImageUser } from '../middlewares/uploadFile'
import { userValidator } from '../validator/userValidator'
import { isAdmin, isLoggedIn, isLoggedOut } from '../middlewares/auth'

const router = Router()

// router.post(
//   '/process-register',
//   uploadImageUser.single('image'),
//   userValidator,
//   isLoggedOut,
//   processRegisterUser
// )
router.post('/user/activate/:token', activateUser)
// router.post('/', uploadImageUser.single('image'), userValidator, createUser)
// router.post('/forget-password', isLoggedOut, forgetPassword)
// router.put('/reset-password', isLoggedOut, resetPassword)

// router.get('/', isLoggedIn, isAdmin, getAllUsers)
// router.get('/:email', isLoggedIn, isAdmin, getSingleUser)

// router.delete('/:email', isLoggedIn, isAdmin, deleteSingUser)
// router.put('/:email', uploadImageUser.single('image'), userValidator, updateUser)
// router.put('/ban/:email', isLoggedIn, isAdmin, banUser)
// router.put('/unban/:email', isLoggedIn, isAdmin, unBanUser)

router.post(
     '/process-register',
     uploadImageUser.single('image'),
     processRegisterUser
   )
router.get('/', getAllUsers)

   router.post('/activate', activateUser)
   router.post('/forget-password',  forgetPassword)
   router.put('/reset-password', resetPassword)

   router.get('/:email', getSingleUser)

   router.delete('/:email', deleteSingUser)
   router.put('/ban/:email', banUser)
   router.put('/unban/:email', unBanUser)

















export default router
