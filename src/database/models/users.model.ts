import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../../types/types'
export interface UserAttributes {
  id?: number
  saccoName: string
  email: string
  contactNo: number
  pin: number
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}
type userInstance = Sequelize.Instance<UserAttributes> & UserAttributes
type UserModel = Sequelize.Model<userInstance, UserAttributes>

export const userInit = (sequelize: Sequelize.Sequelize): UserModel => {
  const attribute: SequelizeAttributes<UserAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    saccoName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactNo: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    pin: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now,
    },
  }
  const users = sequelize.define<userInstance, UserAttributes>(
    'Users',
    attribute,
    {
      tableName: 'Users',
    },
  )
  return users
}
