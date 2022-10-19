const express = require('express');
const router = express.Router();
const Model = require('../models/model');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        companyName: req.body.companyName,
        registrationNumber: req.body.registrationNumber,
        headOffice: req.body.headOffice,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        numberOfEmployees: req.body.numberOfEmployees
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`${data.companyName} has been deleted from the database..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;