const adminModel = require("../models/adminModel");
const { createToken } = require("../utilities/generateToken");
const { responseReturn } = require("../utilities/response");
const bcrypt = require('bcrypt')

const authControllers = async (req, res) => {
  const { email, password } = req.body;
  console.log("printed from body", email);
  console.log("printed from body", password);
  try {
    const admin = await adminModel.findOne({ email }).select("+password");
    // console.log(admin);
    if (admin) {
        const match = await bcrypt.compare(password, admin.password)
        if (match) {
            const token = await createToken({
                id : admin._id,
                role : admin.role
            })
            res.cookie('accessToken', token,{
                expires : new Date(Date.now() + 7*24*60*60*1000)
            })
            responseReturn(res,200,{token, message:"Login Success"})
        } else {
            responseReturn(res, 404, { error: 'Wrong Password' });
        }
    } else {
      responseReturn(res, 500, { error: error.message });
    }
  } catch (error) {
    responseReturn(res, 404, { error: 'Email Not Found' });
  }
};

module.exports = authControllers;
