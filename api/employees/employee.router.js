
const router = require("express").Router();
// const addEmployee = require("../../controllers/employee.controller")


router.post("/", (req, res)=>{
  try{
    res.json({
      status: 200,
      message: "success"
    })
  }catch(error){
    console.log(error)
    res.status(500).send("server error")
  }
});

module.exports = router;
