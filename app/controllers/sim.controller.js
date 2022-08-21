const Sim = require("../models/sim.model");

// Create and Save a new sim
exports.create = (req, res) => {
    // Validate request
    if (!req.body.matricule && !req.body.cin) {
        return res.status(400).send({
            message: "sim content can not be empty",
        });
    }

    // Create a sim
    const sim = new Sim({
        matricule: req.body.matricule,
        cin: req.body.cin,
        fullName: req.body.fullName,
        tel: req.body.tel,
        address:req.body.address
    });

    // Save sim in the database
    sim
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the sim.",
            });
        });
};

// Retrieve and return all sim from the database.
exports.findAll = (req, res) => {
    Sim.find()
        .then((sims) => {
            res.send(sims);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving sims.",
            });
        });
};

// Find a single sim with a simId
exports.findOne = (req, res) => {
    Sim.findById(req.params.simId)
        .then((sim) => {
            if (!sim) {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            res.send(sim);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            return res.status(500).send({
                message:
                    "Error retrieving sim with id " + req.params.simId,
            });
        });
};
// login with credantials

// Update a sim identified by the simId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.fullName) {
        return res.status(400).send({
            message: "sim content can not be empty",
        });
    }

    // Find sim and update it with the request body
    Sim.findByIdAndUpdate(
        req.params.simId,
        {
            matricule: req.body.matricule,
            cin: req.body.cin,
            fullName: req.body.fullName,
            tel: req.body.tel,
            address:req.body.address
        },
        { new: true }
    )
        .then((sim) => {
            if (!sim) {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            res.send(sim);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            return res.status(500).send({
                message:
                    "Error updating sim with id " + req.params.simId,
            });
        });
};

// Delete a sim with the specified simId in the request
exports.delete = (req, res) => {
    Sim.findByIdAndRemove(req.params.simId)
        .then((sim) => {
            if (!sim) {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            res.send({ message: "sim deleted successfully!" });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message:
                        "sim not found with id " + req.params.simId,
                });
            }
            return res.status(500).send({
                message:
                    "Could not delete sim with id " + req.params.simId,
            });
        });
};
