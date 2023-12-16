import ClientApi from "../src/ClientApi/client.api"
import InvoiceApi from "../src/InvoiceApi/invoice.api"
import PaymentApi from "../src/PaymentApi/payment.api"
import ProductApi from "../src/ProductApi/product.api"

export class Fatora {
  PaymentApi: PaymentApi
  InvoiceApi: InvoiceApi
  ClientApi: ClientApi
  ProductApi: ProductApi
  constructor({ apiKey }) {
    // Define Headers
    let headers: Headers = new Headers()
    headers.set("api_key", apiKey)
    headers.set("Content-Type", "application/json")

    // Define Apis
    this.PaymentApi = new PaymentApi(headers)

    this.InvoiceApi = new InvoiceApi(headers)

    this.ClientApi = new ClientApi(headers)

    this.ProductApi = new ProductApi(headers)
  }
}
