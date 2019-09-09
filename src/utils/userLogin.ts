import passportJwt from 'passport-jwt'
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy
export const jwtOptions: any = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
jwtOptions.secreteOrKey = 'gettingTheBestFromMyProject'
