import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
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
    const token = await createAccessToken({
      id: userSave.id
    })
    res.cookie('token', token)
    res.json(userSave)
  } catch (err) {
    return res.status(500).json({
      message: 'Bad request, server response: ', err
    })
  }
}
export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const userfound = await UserModel.findOne({ email })
    if (!userfound) {
      return res.status(400).json({
        message: ['Invalid credentials']
      })
    }
    const isMatch = await bcrypt.compare(password, userfound.password)
    if (!isMatch) {
      return res.status(400).json({
        message: ['Invalid credentials']
      })
    }
    res.json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email
    })
  } catch (err) {
    return res.status(500).json({
      message: 'Bad request, server response: ', err
    })
  }
}
export const protectedRoute = async (req, res) => {
  return res.status(200).json({
    message: 'esta es una ruta protegida'
  })
}
