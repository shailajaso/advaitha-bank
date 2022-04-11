const express = require('express')
const app = express()
// const router = express.Router()
// const electronics = require('./routes/electronics/electronics.js')
// const fashion = require('./routes/fashion/fashion.js')
// const grocery = require('./routes/grocery/grocery.js')
// const mobile = require('./routes/mobile/mobile.js')
const internetbanking = require('./routes/internetbanking/internetbanking.js')
const loan = require('./routes/loan/loan.js')
const shopping = require('./routes/shopping/shopping.js')
const creditcard = require('./routes/creditcard/creditcard.js')

  



app.use(express.static("public"));
// app.use('/electronics', electronics)
// app.use('/fashion', fashion)
// app.use('/grocery', grocery)
// app.use('/mobile', mobile)

app.use('/internetbanking', internetbanking)
app.use('/loan', shopping)
app.use('/shopping', shopping)
app.use('/creditcard', creditcard)
// router.use('/electronics', fashionHandler)
// router.use('/grocery', fashionHandler)
// router.use('/mobile', fashionHandler)

console.log("HI..this is log....");
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log("running on port 8080");
})