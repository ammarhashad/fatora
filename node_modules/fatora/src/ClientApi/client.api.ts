import fatoraEndpoint from "../fatoraEndpoint"
import {
  CreatClientResponse,
  CreateClientBody,
  GetClientResponse,
  ListClientBody,
  ListClientResponse,
  UpdateClientBody,
  UpdateClientResponse,
} from "./types"

export default class ClientApi {
  private readonly ClientBaseApi = `${fatoraEndpoint}/clients`
  private readonly headers: Headers
  constructor(headers: Headers) {
    this.headers = headers
  }

  async CreateNewClient(
    input: CreateClientBody
  ): Promise<CreatClientResponse | undefined> {
    try {
      let res = await fetch(`${this.ClientBaseApi}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<CreatClientResponse>
    } catch (err) {
      console.log(err)
    }
  }
  async ListClient(
    input: ListClientBody
  ): Promise<ListClientResponse | undefined> {
    try {
      let res = await fetch(
        `${this.ClientBaseApi}?${
          input.keyword ? `keyword=${input.keyword}&` : ""
        }email=${input.email}${input.page ? `&page=${input.page}` : ""}${
          input.page_size ? `&page_size=${input.page_size}` : ""
        }`,
        {
          method: "GET",
          headers: this.headers,
        }
      )

      return res.json() as Promise<ListClientResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async GetClient({
    client_id,
  }: {
    client_id: number
  }): Promise<GetClientResponse | undefined> {
    try {
      let res = await fetch(`${this.ClientBaseApi}/${client_id}`, {
        method: "GET",
        headers: this.headers,
      })

      return res.json() as Promise<GetClientResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async UpdateClient(
    { client_id }: { client_id: number },
    input: UpdateClientBody
  ): Promise<UpdateClientResponse | undefined> {
    try {
      let res = await fetch(`${this.ClientBaseApi}/${client_id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<UpdateClientResponse>
    } catch (err) {
      console.log(err)
    }
  }
}
