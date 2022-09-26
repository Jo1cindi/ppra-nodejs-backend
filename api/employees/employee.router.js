// const dbConnection = require("../../config/database")
const router = require("express").Router();


router.post("/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;

  dbConnection.query(
    `insert into employees(firstName, lastName, email, phoneNumber, password) values(?,?,?,?,?)`,
    [firstName, lastName, email, phoneNumber, password],
    
  );
  try{
    res.json({
      status: 200,
      message: "success"
    })
  }catch(error){
    console.log(error)
    return res.status(500).send("server-error")
  }
});

module.exports = router;
