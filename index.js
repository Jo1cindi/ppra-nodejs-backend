// require("dotenv").config();
const express = require("express");
const bodyParser  = require("body-parser");
const app = express();
// const cors = require("cors")

app.use(express.json({extended: false}))

app.use(bodyParser.json());;

const employeeRouter  = require("./api/employees/employee.router")
app.use("/api/employee", employeeRouter)

const accountantRouter = require("./api/accountant/accountant.router")
app.use("/api/accountant", accountantRouter)

const fmRouter  = require("./api/financemanager/financemanager.router")
app.use("/api/finance-manager",fmRouter)

const PORT = process.env.PORT || 3006;
app.listen(PORT, ()=>{
    console.log(`Server is perfectly running on ${PORT}`)
})
