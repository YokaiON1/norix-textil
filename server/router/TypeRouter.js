const Router = require('express') 
const router = new Router()
const typeController = require('../controllers/TypeController') 

router.post('/', typeController.create) 
router.get('/', typeController.getAll)  


module.exports = router
