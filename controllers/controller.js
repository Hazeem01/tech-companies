const Model = require('../models/model')

module.exports = {
    addCompany: async (req, res) => {
        const { companyName, registrationNumber, headOffice, phone, email, website, numberOfEmployees } = req.body;
        const data = new Model({
            companyName,
            registrationNumber,
            headOffice,
            phone,
            email,
            website,
            numberOfEmployees
        });

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {

        }
    },

    getAllCompanies: async (req, res) => {
        try {
            const data = await Model.find();
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    getCompanyById: async (req, res) => {
        try {
            const data = await Model.findById(req.params.id);
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    },

    updateCompanyById: async (req, res) => {
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

        }
    },

    deleteCompany: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Model.findByIdAndDelete(id)
            res.send(`${data.companyName} has been deleted from the database..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}