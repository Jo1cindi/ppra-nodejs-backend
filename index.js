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

app.listen(process.env.PORT || 3006, () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})
