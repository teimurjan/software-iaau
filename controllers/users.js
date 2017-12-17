import {Router} from 'express'
import c from 'config'
import Pathes from '../consts/pathes'
import {signin, signup} from '../services/users'
import {response, error} from '../utils/controller'
import {checkForRequiredFields} from '../utils/validators'

const usersRoutes = Router();
const jwtSecret = c.get('auth.jwtSecret');

usersRoutes.post(Pathes.Users.Login, async (req, res) => {
  try {
    checkForRequiredFields(req.body, ['login', 'password'])
    const {login, password} = req.body;
    const data = await signin(login, password)
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
});

usersRoutes.post(Pathes.Users.Register, async (req, res) => {
  try {
    checkForRequiredFields(req.body, ['login', 'password'])
    const {login, password} = req.body;
    const data = await signup(login, password)
    return response(res, data)
  } catch (err) {
    return error(res, err)
  }
});

export default usersRoutes;