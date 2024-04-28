const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");

const authControllers = async (req, res) => {
  const { email, password } = req.body;
  console.log("printed from body", email);
  console.log("printed from body", password);
  try {
    const admin = await adminModel.findOne({ email }).select("+password");
    // console.log(admin);
    if (admin) {
    } else {
      responseReturn(res, 500, { error: error.message });
    }
  } catch (error) {
    responseReturn(res, 404, { error: 'Email Not Found' });
  }
};

module.exports = authControllers;
