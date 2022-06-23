const timeout = require('express-timeout-handler');
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routers/routes")
const cors = require('cors')
const app = express();

const options = {

    // Optional. This will be the default timeout for all endpoints.
    // If omitted there is no default timeout on endpoints
    timeout: 30000,
  
    // Optional. This function will be called on a timeout and it MUST
    // terminate the request.
    // If omitted the module will end the request with a default 503 error.
    onTimeout: function(req, res) {
      res.status(503).send('Service unavailable. Please retry.');
    },
  
    // Optional. Define a function to be called if an attempt to send a response
    // happens after the timeout where:
    // - method: is the method that was called on the response object
    // - args: are the arguments passed to the method
    // - requestTime: is the duration of the request
    // timeout happened
    onDelayedResponse: function(req, method, args, requestTime) {
      console.log(`Attempted to call ${method} after timeout`);
    },
    // Optional. Provide a list of which methods should be disabled on the
    // response object when a timeout happens and an error has been sent. If
    // omitted, a default list of all methods that tries to send a response
    // will be disable on the response object
    disable: ['write', 'setHeaders', 'send', 'json', 'end']
};

app.use(express.json());
app.use(timeout.handler(options));

// khai báo cổng chạy dịch vụ

const db = process.env.MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
// "To do API Root" sẽ được trả về khi thực hiện get request trên trang home page của ứng dụng  
app.get('/', function (req, res) {
  res.send('Hello stack')
});
app.use(cors({origin:"*", credentials:true}))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods","*")
  res.header("Access-Control-Allow-Headers","Content-Type")
  next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(Router);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});
