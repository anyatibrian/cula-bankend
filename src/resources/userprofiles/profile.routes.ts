import express from 'express'
import multer from 'multer'
import { checkAuth } from '../../middleware/checkAuth'
import { diskStorage } from '../../middleware/imagehandler.middle'
import UserProfiles from './profile.controllers'
export const profileRoutes = express.Router()
const profile: UserProfiles = new UserProfiles()
const upload = multer({ storage: diskStorage })
profileRoutes
  .route('/profiles')
  .all(checkAuth)
  .post(profile.createNewModel)
  .get(profile.getSingleModelInformation)
  .put(upload.single('profileImage'), profile.updateModelInformation)
