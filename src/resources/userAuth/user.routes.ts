import { celebrate } from 'celebrate'
import { Router } from 'express'
import { checkUserExist } from '../../middleware/checkUser.middleware'
import User from './user.controller'
import { ValidateUserSchema } from './userReg.validate'
const user: User = new User()

export const UserRoutes = Router()
// declaring the routes for users
UserRoutes.route('/register')
  .all()
  .post(
    celebrate({ body: ValidateUserSchema }),
    checkUserExist,
    user.createNewModel,
  )
  .get(user.getAllModellInformation)
// login routes
UserRoutes.route('/login').post(user.loginUser)
