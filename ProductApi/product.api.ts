import fatoraEndpoint from "../fatoraEndpoint"
import {
  CreateBodyResponse,
  CreateProductBody,
  DeleteProductResponse,
  GetProductResponse,
  UpdateProductBody,
  UpdateProductResponse,
  SearchProductBody,
} from "./types"

export default class ProductApi {
  private readonly ProductBaseAPi = `${fatoraEndpoint}/products`
  private readonly headers: Headers
  constructor(headers: Headers) {
    this.headers = headers
  }

  async CreateNewProduct(
    input: CreateProductBody
  ): Promise<CreateBodyResponse | undefined> {
    try {
      let res = await fetch(`${this.ProductBaseAPi}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })
      return res.json() as Promise<CreateBodyResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async UpdateProduct(
    { product_id }: { product_id: number },
    input: UpdateProductBody
  ): Promise<UpdateProductResponse | undefined> {
    try {
      let res = await fetch(`${this.ProductBaseAPi}/${product_id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(input),
      })
      return res.json() as Promise<CreateBodyResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async DeleteProduct({
    product_id,
  }: {
    product_id: number
  }): Promise<DeleteProductResponse | undefined> {
    try {
      let res = await fetch(`${this.ProductBaseAPi}/${product_id}`, {
        method: "DELETE",
        headers: this.headers,
      })
      return res.json() as Promise<DeleteProductResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async GetProduct({
    product_id,
  }: {
    product_id: number
  }): Promise<GetProductResponse | undefined> {
    try {
      let res = await fetch(`${this.ProductBaseAPi}/${product_id}`, {
        method: "GET",
        headers: this.headers,
      })
      return res.json() as Promise<GetProductResponse>
    } catch (err) {
      console.log(err)
    }
  }

  private buildQueryString(params: SearchProductBody): string {
    const queryParams: string[] = []

    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] !== undefined) {
        const value = params[key]

        queryParams.push(`${key}=${encodeURIComponent(String(value))}`)
      }
    }

    return queryParams.join("&")
  }

  async SearchProducts(input: SearchProductBody) {
    try {
      let res = await fetch(
        `${this.ProductBaseAPi}?${this.buildQueryString(input)}`,
        {
          method: "GET",
          headers: this.headers,
        }
      )
      console.log(`${this.ProductBaseAPi}?${this.buildQueryString(input)}`)
      return res.json()
    } catch (err) {}
  }
}
