import bodyParser from 'body-parser'
import { errors } from 'celebrate'
import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'
import { checkAuth } from './middleware/checkAuth'
import { UserRoutes } from './resources/userAuth/user.routes'
import { profileRoutes } from './resources/userprofiles/profile.routes'

const prefix = '/api/v1/'

// setting up the application
const app: Express = express()
app.use(morgan('dev'))
app.set('secretOrkey', 'getSomeNinjas')
app.use(express.static('uploads'))
// setting up the application with body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// the initial app setup
app.get('/', checkAuth, (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'your welcome to the app',
    userInfo: req.user,
  })
})
// the users routes
app.use(`${prefix}users`, UserRoutes)
app.use(`${prefix}users`, profileRoutes)
app.use(errors())
export default app
