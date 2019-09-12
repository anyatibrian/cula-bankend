import * as Sequelize from 'sequelize'
import { SequelizeAttributes } from '../../types/types'
interface IuserProfilesAttributes {
  id?: number
  saccoId: string
  accountNo: string
  profileImage: string
  country: string
  district: string
  county: string
  village: string
  division: string
  subcounty: string
  createdAt?: string
  updatedAt?: string
}

type ProfileInstance = Sequelize.Instance<IuserProfilesAttributes> &
  IuserProfilesAttributes

type ProfileModel = Sequelize.Model<ProfileInstance, IuserProfilesAttributes>

export const ProfileInit = (sequelize: Sequelize.Sequelize): ProfileModel => {
  const attributes: SequelizeAttributes<IuserProfilesAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    saccoId: {
      allowNull: false,
      type: Sequelize.UUID,
    },
    accountNo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profileImage: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    district: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    county: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    village: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    country: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    division: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    subcounty: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  }
  const profile = sequelize.define<ProfileInstance, IuserProfilesAttributes>(
    'SaccoProfiles',
    attributes,
    {
      tableName: 'saccoprofiles',
    },
  )
  profile.associate = model => {
    profile.belongsTo(model.User, {
      as: 'sacco',
      foreignKey: 'saccoId',
      onDelete: 'CASCADE',
    })
  }
  return profile
}
