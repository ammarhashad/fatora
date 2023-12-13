import InvoiceApi from "./InvoiceApi/invoice.api"
import PaymentApi from "./PaymentApi/payment.api"

export class FatoraClient {
  PaymentApi: PaymentApi
  InvoiceApi: InvoiceApi
  constructor({ apiKey }) {
    // Define Headers
    let headers: Headers = new Headers()
    headers.set("api_key", apiKey)
    headers.set("Content-Type", "application/json")

    // Define Apis
    this.PaymentApi = new PaymentApi(headers)

    this.InvoiceApi = new InvoiceApi(headers)
  }
}

let client = new FatoraClient({
  apiKey: "E4B73FEE-F492-4607-A38D-852B0EBC91C9",
})

let newInvoice = await client.InvoiceApi.DeleteInvoice({
  invoice_id: 2045,
})

console.log(newInvoice)
