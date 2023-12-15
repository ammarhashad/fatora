# fatora

### Installation

#### yarn

>     yarn add fatora

#### npm

>     npm install fatora

### Usage

>       // For CommonJS Modules
>
>     const  fatora = require("fatora")
>
>     // For ES6 Modules
>
>     import  fatora  from  "fatora"
>
>     const  FatoraClient = new  fatora({ apiKey:  "YOUR_API_KEY" })

### Example

>     const  FatoraClient = new  fatora({ apiKey:  "YOUR_API_KEY" })
>
>     // Example of creating a simple checkout
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
>     console.log(res)
>     })
