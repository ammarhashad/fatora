import ClientApi from "./ClientApi/client.api"
import InvoiceApi from "./InvoiceApi/invoice.api"
import PaymentApi from "./PaymentApi/payment.api"

export default class Fatora {
  PaymentApi: PaymentApi
  InvoiceApi: InvoiceApi
  ClientApi: ClientApi
  constructor({ apiKey }) {
    // Define Headers
    let headers: Headers = new Headers()
    headers.set("api_key", apiKey)
    headers.set("Content-Type", "application/json")

    // Define Apis
    this.PaymentApi = new PaymentApi(headers)

    this.InvoiceApi = new InvoiceApi(headers)

    this.ClientApi = new ClientApi(headers)
  }
}
