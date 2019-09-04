import db from './models'

export const dropSequelizeMeta = db.sequelize.query('DROP TABLE IF EXISTS "SequelizeMeta"', { raw: true })

dropSequelizeMeta
  .then(() => {
    process.exit(0)
  })
  .catch(() => {
    process.exit(0)
  })
