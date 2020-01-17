const express = require('express')
const router = express.Router()

const auth = require('../middlewares/auth')
const loginController = require('../controllers/loginController')
const charactersController = require('../controllers/charactersController')

router.post('/login',loginController.login)
router.post('/register',loginController.register)
router.get('/auth',auth,loginController.auth)
router.get('/character/:id',auth,charactersController.getCharacter)
router.post('/character',auth, charactersController.createCharacter)


module.exports = router