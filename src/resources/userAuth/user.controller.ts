import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import db from '../../database/models'
import CrudController from '../../utils/crud.utils'
import { jwtOptions } from '../../utils/userLogin'

class User extends CrudController {
  public model: string = 'User'
  // function responsible for logging in users
  public loginUser = async (
    req: Request,
    res: Response,
    next: any,
  ): Promise<any> => {
    const { contactNo, pin } = req.body
    const user = await db.User.findOne({
      attributes: [
        'id',
        'saccoName',
        'email',
        'contactNo',
        'pin',
        'isActive',
        'createdAt',
        'updatedAt',
      ],
      where: { contactNo, pin },
    })
    if (user) {
      const token = jwt.sign(
        { id: user.id, saccoName: user.saccoName },
        jwtOptions.secreteOrKey,
      )
      return res.status(200).json({
        message: 'welcome your login was successfully',
        usersInfor: user,
        Authtoken: token,
      })
    }
    return res.status(400).json({
      error: 'your name and password does not exist',
    })
  }
}
export default User
