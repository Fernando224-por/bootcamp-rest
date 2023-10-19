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
export const getCourses = async (req, res) => {
  try {
    const bootcamps = await CourseModel.find({})
    return res.status(200).json(
      bootcamps
    )
  } catch (err) {
    return res.status(500).json({
      message: 'something goes wrong'
    })
  }
}

export const getCourse = async (req, res) => {
  try {
    const { id } = req.body
    const bootcamp = await CourseModel.findById({
      _id: id
    })
    return res.status(200).json(
      bootcamp
    )
  } catch (err) {
    return res.status(500).json({
      message: 'something goes wrong'
    })
  }
}

export const deleteCourse = async (req, res) => {
  const deleteCourse = await CourseModel.findByIdAndDelete(req.params.id)
  try {
    if (!deleteCourse) {
      return res.status(404).json({
        message: 'Course not found'
      })
    } else {
      res.sendStatus(204)
    }
  } catch (err) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const patchCourse = async (req, res) => {
  const { title, description, weeks, tuition, minimunSkill } = req.body
  try {
    const updateCourse = await CourseModel.findByIdAndUpdate(
      { _id: req.params.id },
      { title, description, weeks, tuition, minimunSkill },
      { new: true }
    )
    return res.json(updateCourse)
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}
