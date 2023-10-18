import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
export const register = async (req, res) => {
  const { name, email, role, password } = req.body
  try {
    const userFound = await UserModel.findOne({ email })
    if (userFound) {
      return res.status(400).json([
        'This email is in use'
      ])
    }
    const hash = await bcrypt.hash(password, 12)
    const newUser = new UserModel({
      name,
      email,
      role,
      password: hash
    })
    const userSave = await newUser.save()
    res.json(userSave)
  } catch (err) {
    return res.status(500).json({
      message: 'Bad request, server response: ', err
    })
  }
}