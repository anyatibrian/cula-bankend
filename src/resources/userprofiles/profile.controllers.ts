import { NextFunction, Request, Response } from 'express'
import db from '../../database/models'
import CrudController from '../../utils/crud.utils'
class UserProfiles extends CrudController {
  public model: string = 'SaccoProfile'
  public updateModelInformation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    const {
      body: {
        district,
        accountNo,
        county,
        village,
        country,
        division,
        subcounty,
      },
      file: { path },
      user: { id },
    }: string | any = req
    try {
      const updateProfile = await db[this.model].update(
        {
          profileImage: path,
          accountNo,
          district,
          county,
          village,
          country,
          division,
          subcounty,
        },
        {
          where: { saccoId: id },
        },
      )
      if (updateProfile) {
        return res.status(200).json({
          message: 'your profile has been updated successfully',
        })
      }
    } catch (err) {
      err.status = 500
      err.message = 'failed to update your profile information'
      return res.json(err)
    }
  }
  public getSingleModelInformation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> => {
    try {
      const {
        user: { id },
      }: string | any = req
      const userProfiles = await db[this.model].findOne({
        include: [
          {
            model: db.User,
            as: 'sacco',
          },
        ],
        where: { saccoId: id },
      })
      if (userProfiles) {
        return res.status(200).json({
          message: 'your profile informations',
          profile: userProfiles,
        })
      }
    } catch (err) {
      err.status = 500
      err.message = "your don't have any information "
      return res.status(500).json(err)
    }
  }
}
export default UserProfiles
