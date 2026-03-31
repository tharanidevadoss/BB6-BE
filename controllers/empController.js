const asynchandler = require("express-async-handler");
const emp = require("../models/empModels");
const createmployee = asynchandler(async (req, res) => {
  const { name, designation, address, ContactNo } = req.body;
  const employee = await emp.create({
    name,
    designation,
    address,
    ContactNo,
  });
  res.status(200).send(employee);
});
// getuser
const getemployee = async (req, res) => {
  let result = await emp.find();
  res.status(200).json({ result });
};
const updateemployee = asynchandler(async (req, res) => {
  const employee = await emp.findById(req.params.id);
  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }
  const updateemp = await emp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); //new:true  ->To get updated values after updating
  res.status(200).send(updateemp);
});
const deletemployee = asynchandler(async (req, res) => {
  const employee = await emp.findById(req.params.id);
  if (!employee) {
    res.status(400);
    throw new Error("Employee not found");
  }
  await emp.deleteOne({ _id: req.params.id });
  res.status(200).send({ deleteid: req.params.id });
});
module.exports = { createmployee, updateemployee, deletemployee, getemployee };
