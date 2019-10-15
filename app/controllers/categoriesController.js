const Category = require('../models/category')


//express routing
module.exports.list = (req, res) => {
    Category.find({ user: req.user._id })
        .then((categories) => {
            res.json(categories)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Category.findById({ _id: id, user: req.user._id })
        .then((category) => {
            res.json(category)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.user = req.user._id
    category.save()
        .then(category => res.json({ notice: 'successfully created a category', category }))
        .catch(err => res.json(err))
}


module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body()
    Category.findOneAndUpdate({ _id: id, user: req.user._id }, { $set: body }, { new: true, runValidators: true })
        .then(category => {
            if (category) {
                res.json(category)
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
    Category.findOneAndDelete({ _id: id, user: req.user._id })
        .then(category => {
            if (category) {
                res.json(category)
            }
            else {
                res.status('404').json({})
            }

        })
        .catch(err => {
            res.json(err)
        })
}