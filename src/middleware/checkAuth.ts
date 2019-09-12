// function responsible for checking authenticated users
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    headers: { authorization },
  }: string | any = req
  try {
    const decode: object | any = jwt.verify(
      authorization.slice(7),
      req.app.get('secretOrkey'),
    )
    req.user = decode
  } catch (err) {
    err.message = 'you are not athourised to access these routes'
    err.status = 401
    return res.status(401).json(err)
  }
  next()
}
