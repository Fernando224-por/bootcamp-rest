import BootcampModel from '../models/bootcamp.model.js'

export const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await BootcampModel.find({})
    res.json(bootcamps)
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}

export const getBootcamp = async (req, res) => {
  const { id } = req.body
  try {
    const bootcamp = await BootcampModel.findById({
      _id: id
    })
    res.json(bootcamp)
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}

export const postBootcamp = async (req, res) => {
  try {
    const { name, phone, address, topics, averageRating } = req.body
    const newBootcamp = new BootcampModel({
      name,
      phone,
      address,
      topics,
      averageRating
    })
    await newBootcamp.save()
    res.json(newBootcamp)
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}

export const putBootcamp = async (req, res) => {
  const { name, phone, address, topics, averageRating } = req.body
  try {
    const updateBootcamp = await BootcampModel.findByIdAndUpdate(
      { _id: req.params.id },
      { name, phone, address, topics, averageRating },
      { new: true }
    )
    return res.json(updateBootcamp)
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}

export const deleteBootcamp = async (req, res) => {
  const deleteBootcamp = await BootcampModel.findByIdAndDelete(req.params.id)
  try {
    if (!deleteBootcamp) {
      return res.status(404).json({ message: 'Task not found' })
    } else {
      return res.sendStatus(204)
    }
  } catch (err) {
    return res.status(500).json({
      message: 'bad request, Server response:', err
    })
  }
}
