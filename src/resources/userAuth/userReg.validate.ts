import { isCelebrate, Joi } from 'celebrate'
export const ValidateUserSchema = Joi.object().keys({
  saccoName: Joi.string()
    .min(5)
    .required(),
  email: Joi.string().required(),
  pin: Joi.string()
    .min(4)
    .max(4)
    .required(),
  contactNo: Joi.string()
    .min(10)
    .max(13)
    .required(),
})
