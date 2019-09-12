import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../../app'
import db from '../../../database/models'
chai.use(chaiHttp)
const testPrefix = '/api/v1/'
describe('user profile test', () => {
  before(async () => {
    await db.User.create({
      saccoName: 'anakaSacoziz',
      email: 'okellomoses@gmail.com',
      contactNo: 1234567890,
      isActive: false,
      pin: 1234,
    })
  })
  it('should test user logging in', async () => {
    chai
      .request(app)
      .post(`${testPrefix}users/login`)
      .send({
        contactNo: '1234567890',
        pin: '1234',
      })
      .end(async (err, res) => {
        console.log('logging the ', res)
        expect(res.status).to.equal(500)
      })
  })
})
