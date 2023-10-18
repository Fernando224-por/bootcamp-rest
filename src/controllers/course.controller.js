import CourseModel from '../models/course.model.js'
export const postCourse = async (req, res) => {
  try {
    const { title, description, weeks, tuition, minimunSkill } = req.body
    const newCourse = new CourseModel({
      title,
      description,
      weeks,
      tuition,
      minimunSkill
    })
    await newCourse.save()
    res.json(newCourse)
  } catch (err) {
    return res.status(400).json({
      message: 'Bad Request, server response: ', err
    })
  }
}
