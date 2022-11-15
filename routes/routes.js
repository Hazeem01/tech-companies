const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to the Tech Companies DataBase</h1> <p><a href = https://tech-companies.herokuapp.com/api/tech-companies/all>Get All Data</a></p>'
    )
})

//Post Method
router.post('/', controller.addCompany);

//Get all Method
router.get('/all', controller.getAllCompanies);

//Get by ID Method
router.get('/:id', controller.getCompanyById);

//Update by ID Method
router.patch('/:id', controller.updateCompanyById);

//Delete by ID Method
router.delete('/:id', controller.deleteCompany);

module.exports = router;