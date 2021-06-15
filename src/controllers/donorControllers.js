const donor = require('../models/donor') //importing donor model

//creating a function to register donors
exports.registerNewDonor = (req, res) => {
    donor.create({ //creating the donor document
        ...req.body
    }, (err, newUser) => {
        if (err) {
            res.status(406).json({ message: err})
        }
        else {
            res.status(200).json({message: 'Donor succesfuly created', data: newUser})
        }
    })
}