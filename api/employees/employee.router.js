
const router = require("express").Router();
const addEmployee = require("../../controllers/employee.controller")


router.post("/", addEmployee
);

module.exports = router;
