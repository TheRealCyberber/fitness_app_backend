const Progress = require('../models/Progress')

const GetProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user.id })
    res.send(progress)
  } catch (error) {
    throw error
  }
}

const CreateProgress = async (req, res) => {
  try {
    const progress = await Progress.create({
      userId: req.user.id,
      date: req.body.date,
      weight: Number(req.body.weight),
      latestChange: Number(req.body.latestChange),
      notes: req.body.notes
    })
    res.status(201).json(progress)
  } catch (error) {
    throw error
  }
}

const UpdateProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(progress)
  } catch (error) {
    throw error
  }
}

const DeleteProgress = async (req, res) => {
  try {
    await Progress.deleteOne({ _id: req.params.id })
    res.send({ msg: 'Progress Deleted', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProgress,
  CreateProgress,
  UpdateProgress,
  DeleteProgress
}
