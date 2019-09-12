import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import db from '../../database/models'
import CrudController from '../../utils/crud.utils'
class User extends CrudController {
  public model: string = 'User'
  // function responsible for logging in users
  public createNewModel = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const saltRound: number = 10
    const salt = bcrypt.genSaltSync(saltRound)
    try {
      const {
        body: { saccoName, email, contactNo, pin },
      } = req
      const hash = bcrypt.hashSync(pin, salt)
      const createUser = await db[this.model].create({
        saccoName,
        email,
        contactNo,
        pin: hash,
      })
      if (createUser) {
        await db.SaccoProfile.create({
          saccoId: createUser.id,
          accountNo: createUser.contactNo,
          profileImage: '',
          country: '',
          district: '',
          county: '',
          subcounty: '',
          village: '',
          division: '',
        })
        return res.status(201).json({
          message:
            'your user account and profile has been created successfully',
          userInfo: createUser,
        })
      }
    } catch (err) {
      err.status = 400
      err.message = 'there was an error creating your information'
      return res.status(400).json(err)
    }
  }

  public loginUser = async (
    req: Request,
    res: Response,
    next: any,
  ): Promise<any> => {
    const { contactNo, pin } = req.body
    const user: any = await db.User.findOne({
      include: [
        {
          model: db.SaccoProfile,
          as: 'saccoProfile',
        },
      ],
      where: { contactNo },
    })
    const usersPin: boolean | any = bcrypt.compareSync(pin, user.pin)
    if (usersPin === true) {
      const userToken = jwt.sign(
        {
          id: user.id,
          saccoName: user.saccoName,
          role: user.role,
        },
        req.app.get('secretOrkey'),
      )
      return res.status(200).json({
        message: 'welcome your login was successfully',
        usersInfor: user,
        token: userToken,
      })
    }
    return res.status(400).json({
      error: 'your name and password does not exist',
    })
  }
}
export default User
