import { Request, Response } from 'express'
import { Op } from 'sequelize'
import db from '../database/models'

// middleware that checks whether the user exist in app
export const checkUserExist = async (
  req: Request,
  res: Response,
  next: any,
) => {
  const { email, saccoName, contactNo } = req.body
  const userExist = await db.User.findOne({
    attributes: ['email', 'contactNo'],
    where: {
      email: { [Op.eq]: email },
      contactNo: { [Op.eq]: contactNo },
    },
  })
  if (userExist) {
    return res.status(400).json({
      error: `user with ${email} and ${saccoName} already exist`,
    })
  }
  next()
}
