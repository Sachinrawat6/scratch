const express = require("express");
const router = express.Router();
const Owner = require("../models/owner-model");
const bcrypt = require("bcrypt");

if (process.env.NODE_ENV) {
    router.post("/create", async (req, res) => {
        const { fullname, email, password, isAdmin, picture, gstin } = req.body;
      
        const ownerExists = await Owner.find();
        if (ownerExists.length > 0) {
          return res
            .status(503)
            .json({ msg: "You don't have permission to create a new owner" });
        }
      
        try {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              return res.status(500).json({ msg: "Salt generation failed", err });
            }
      
            bcrypt.hash(password, salt, async (err, hash) => {
              if (err) {
                return res.status(500).json({ msg: "Hashing failed", err });
              }
      
              try {
                const ownerCreated = await Owner.create({
                  fullname,
                  email,
                  password: hash,
                  isAdmin,
                  picture,
                  gstin,
                });
      
                res
                  .status(201)
                  .json({ msg: "Owner created", ownerId: ownerCreated._id });
              } catch (error) {
                res.status(503).json({ msg: "Database error", error });
              }
            });
          });
        } catch (error) {
          res.status(503).json({ msg: "Unexpected error", error });
        }
      });
}

router.get("/", async (req, res) => {
  const owner = await Owner.find();
  res.status(200).json(owner);
});

module.exports = router;
