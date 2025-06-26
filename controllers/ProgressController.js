const Progress = require('../models/Progress')

const GetProgress = async (req, res) => {
  try {
    const progress = await Progress.find({})
    res.send(progress)
  } catch (error) {
    throw error
  }
}

const CreateProgress = async (req, res) => {
  try {
    const progress = await Progress.create({ ...req.body })
    res.send(progress)
  } catch (error) {
    throw error
  }
}

const UpdateProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(req.params.progress_id, req.body, {new: true})
    res.send(progress)
  } catch (error) {
    throw error
  }
}

const DeleteProgress = async (req, res) => {
  try {
    await Progress.deleteOne({ _id: req.params.progress_id })
    res.send({ msg: 'Progress Deleted', payload: req.params.progress_id, status: 'Ok' })
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