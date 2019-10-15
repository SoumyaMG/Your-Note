const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')
const userController = require('../app/controllers/userController')
const { authenticateUser } = require('../app/middleware/authentication')

router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/:id', authenticateUser, notesController.show)
router.put('/notes/:id', authenticateUser, notesController.update)
router.post('/notes', authenticateUser, notesController.create)
router.delete('/notes/:id', authenticateUser, notesController.destroy)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.post('/categories', authenticateUser, categoriesController.create)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)
router.get('/users/account', userController.account)
router.get('/users/logout', userController.logout)

module.exports = router