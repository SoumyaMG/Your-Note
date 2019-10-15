const Note = require('../models/note')


//express routing
module.exports.list = (req, res) => {
    Note.find({ user: req.user._id }).populate('category')
        .then((notes) => {
            res.json(notes)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    // Note.findById(id).populate('category')
    Note.findOne({
        _id: id,
        user: req.user._id
    }).populate('category', ['name'])
        .then((note) => {
            if (!note) {
                res.status('404').json({})
            }
            else {
                res.json(note)
            }
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const note = new Note({ title: data.title, body: data.body, category: data.category })
    note.user = req.user.id
    note.save()
        .then((note) => {
            res.json(note)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findOneAndUpdate({ _id: id, user: req.user._id }, { $set: body }, { new: true, runValidators: true })
        .then(note => {
            if (note) {
                res.json(note)
            }
            else {
                res.status('404').json({})
            }

        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Note.findOneAndDelete({ _id: id, user: req.user._id })
        .then(note => {
            if (note) {
                res.json(note)
            }
            else {
                res.status('404').json({})
            }

        })
        .catch(err => {
            res.json(err)
        })
}