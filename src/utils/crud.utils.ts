import { NextFunction, Request, Response } from 'express'
import { Op } from 'sequelize'
import db from '../database/models'
class CrudController {
  public model: string | any = ''
  // method for getting all the models created
  public getAllModellInformation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const modelInfo = await db[this.model].findAll()
    if (modelInfo) {
      return res.status(200).json({
        data: modelInfo,
      })
    }
    return res.status(404).json({
      error: 'you dont have orders in your list',
    })
  }
  // there was an error undating your model
  public updateModelInformation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const {
      body,
      params: { id },
    } = req
    const UpdateInformation = await db[this.model].update(body, {
      where: {
        id: { [Op.eq]: id },
      },
    })
    if (UpdateInformation) {
      return res.status(200).json({
        message: 'your model has been updated successfully',
      })
    }
  }
  // method responsible for creating each model
  public createNewModel = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { body } = req
    const newModel = await db[this.model].create(body)
    if (newModel) {
      return res.status(201).json({
        message: `${this.model} has been successfully created`,
        model: newModel,
      })
    }
    return res.status(400).json({
      error: 'there was error creating your information',
    })
  }
}
export default CrudController
