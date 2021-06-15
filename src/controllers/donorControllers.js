const donor = require('../models/donor')

exports.registerNewDonor = (req, res) => {
    donor.create({
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