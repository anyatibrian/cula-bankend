import { Sequelize } from 'sequelize'
import { ProfileInit } from './profiles.models'
import { userInit } from './users.model'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config.json')[env]

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_URI || config)
const db = {
  Sequelize,
  sequelize,
  User: userInit(sequelize),
  SaccoProfile: ProfileInit(sequelize),
}
Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

export default db
