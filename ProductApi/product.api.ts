import fatoraEndpoint from "../fatoraEndpoint"
import { CreateProductBody } from "./types"

export class ProductApi {
  private readonly ProductBaseAPi = `${fatoraEndpoint}/products`
  private readonly headers: Headers
  constructor(headers: Headers) {
    this.headers = headers
  }

  async CreateNewProduct(input: CreateProductBody) {
    try {
      let res = await fetch(`${this.ProductBaseAPi}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })
      return res.json()
    } catch (err) {
      console.log(err)
    }
  }
}
