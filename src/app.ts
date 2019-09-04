import bodyParser from 'body-parser'
import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'

// setting up the application
const app: Express = express()
app.use(morgan('dev'))
// setting up the application with body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// the initial app setup
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'your welcome to the app',
  })
})
export default app
