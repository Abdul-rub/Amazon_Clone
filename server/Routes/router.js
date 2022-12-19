const express = require("express");
const bcrypt = require("bcryptjs");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userSchema.js");

const Products = require("../Models/productSchema");

//GET PRODUCTS
router.get("/products", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log(productsdata)
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

//GET SINGLE PRODUCTS BY ID
router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleData = await Products.findOne({ id: id });

    // console.log(singleData)
    res.status(201).json(singleData);
  } catch (error) {
    res.status(400).json(singleData);
    console.log("error" + error.message);
  }
});

//SIGNUP

router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { fname, email, mobile, password, cpassword } = req.body;
  if (!fname || !email || !mobile || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the data first" });
    console.log("Not data");
  }
  const presentUser = await userModel.findOne({ email });
  if (presentUser) {
    return res.status(422).json({ error: "this email is already exists" });
  } else if (password !== cpassword) {
    return res
      .status(422)
      .json({ error: "Password and Confirm did not match" });
  } else {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) {
        return res.send("error happened");
      }

      const finalUser = new userModel({
        fname,
        email,
        mobile,
        password: hash,
        cpassword: hash,
      });

      try {
        await finalUser.save();
        console.log(finalUser);
        res.send(finalUser);
        res.status(201).json(storeData);
      } catch (error) {
        res.send({ msg: "Something went wrong", err });
      }
    });
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Fill the data" });
  }
  try {
    const userlogin = await userModel.findOne({ email: email });
    const user_id = userlogin._id;
    if (userlogin) {
      bcrypt.compare(password, userlogin.password).then(async function (result) {
        if (result) {
          const token = jwt.sign({ user_id }, process.env.SECRET_KEY);
          await userModel.updateOne(
            { email },
            { $set: { token: { token: token } } },
          );
          return res.send({ msg: "login Successfull", token });
        } else {
          return res.status(400).json({ error: "Invalid Details" });
        }
      });
    }
    // const isMatch = await bcrypt.compare(password, userlogin.password);
    // console.log(isMatch)
    // pdate({name: "John"}, {$push: {friends: {firstName: "Harry", lastName: "Potter"}}})
    //Token Generate
    //   if (isMatch) {
    //     const token = jwt.sign({ user_id }, process.env.SECRET_KEY);
    //     //   let obj={token};
    //     //  userModel.token.push(obj);
    //     //  await userModel.save(done);
    //     // await userModel.update({email},{$push:{token:{token:token}}},done)
    //     res.send({ msg: "login Successfull", token });
    //     return token;
    //   } else if (!isMatch) {
    //     res.status(400).json({ error: "Invalid Details" });
    //   } else {
    //     res.status(201).json({ message: "password match" });
    //   }
    // }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details" });
  }
});

module.exports = router;
