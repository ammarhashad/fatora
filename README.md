# fatora

### Usage

~~**\***> // For CommonJS Modules

>     const  fatora = require("fatora")
>
>     // For ES6 Modules
>
>     import  fatora  from  "fatora"
>
>
>
>     async  function  MakeNewRequest() {
>
>     // Enter Your Api_key Here => visit fatora.io to get your api key
>
>     const  FatoraClient = new  fatora({
>
>     apiKey:  "",
>
>     })
>
>
>     // Example request for a simple checkout
>     let  request = FatoraClient.PaymentApi.Checkout({
>     amount:  123.1,
>     currency:  "QAR",
>     order_id:  "123456",
>     client: {
>     name:  "client",
>     phone:  "+974 77777777",
>     email:  "client@domain.com",
>     },
>     language:  "ar",
>     success_url:  "http://domain.com/payments/success",
>     failure_url:  "http://domain.com/payments/failure",
>     fcm_token:  "XXXXXXXXX",
>     save_token:  true,
>     note:  "some additional info",
>     }).then((res) => {
>
>     console.log(res)
>
>     console.log(res.result)
>
>     })
>
>     }
>
>
>
>     MakeNewRequest()*****~~
