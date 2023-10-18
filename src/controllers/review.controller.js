import ReviewModel from '../models/review.model.js'
export const postReview = async (req, res) => {
  try {
    const { title, comment, rating } = req.body
    const newReview = new ReviewModel({
      title,
      comment,
      rating
    })
    await newReview.save()
    res.send(newReview)
  } catch (err) {
    return res.status(400).json({
      message: 'Bad Request, server response: ', err
    })
  }
}
