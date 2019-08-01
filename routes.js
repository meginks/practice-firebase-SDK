const express = require('express');
const DB = require('./models.js');
const {decodeHeader} = require('./firebase_middleware.js');

const router = express.Router(); 


router.get('/', decodeHeader, async (req, res) => {
    try {
        const users = await DB.find();
        res
          .status(200)
          .json(users);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

// POST New User
router.post('/', decodeHeader, async (req, res) => {
    const user = req.body;
    if(!user.firstName || !user.lastName || !user.email) {
      return res.status(404).json({
      message: "Make sure to fillout all of input fields"
    })
  } else {
    try {
      const newUser = req.body;
      const brandNewUser = await DB.add(newUser)
      res.status(201).json(brandNewUser)
    } catch (error) {
      res.status(500).json(error)
    }
  }
})


module.exports = router;