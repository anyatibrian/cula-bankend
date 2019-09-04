import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize'

declare global {
  export type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions
  }
}
