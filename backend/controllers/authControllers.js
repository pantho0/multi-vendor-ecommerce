const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const { createToken } = require("../utilities/generateToken");
const { responseReturn } = require("../utilities/response");
const bcrypt = require('bcrypt');

const authControllers = {
  auth: async (req, res) => {
    const { email, password } = req.body;
    console.log("printed from body", email);
    console.log("printed from body", password);
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin._id,
            role: admin.role
          });
          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          });
          responseReturn(res, 200, { token, message: "Login Success" });
        } else {
          responseReturn(res, 404, { error: 'Wrong Password' });
        }
      } else {
        responseReturn(res, 404, { error: 'Email Not Found' });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  },

  seller_register: async (req, res) => {
    const {email, name, password} = req.body;
    try {
      const getUser = await sellerModel.findOne({email})
      if (getUser) {
        responseReturn(res, 404, { error: 'Email Already Exist' });
      }else{
        const seller = await sellerModel.create({
          name,
          email,
          password : await bcrypt.hash(password, 10),
          method : 'manually',
          shopInfo : {}
        })
        console.log(seller);
      }
    } catch (error) {
      console.log(error);
    }
    
  },

  getUser: async (req, res) => {
    const { id, role } = req;
    try {
      if (role === 'admin') {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log('seller info');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = authControllers;
