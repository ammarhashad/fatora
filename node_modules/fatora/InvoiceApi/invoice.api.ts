import fatoraEndpoint from "../fatoraEndpoint"
import { CreateInvoiceBody, InvoiceResponse, UpdateInvoiceBody } from "./types"

export default class InvoiceApi {
  private readonly InvoiceBaseApi = `${fatoraEndpoint}/invoices`
  private readonly headers: Headers
  constructor(headers: Headers) {
    this.headers = headers
  }

  async CreateNewInvoice(
    input: CreateInvoiceBody
  ): Promise<InvoiceResponse | undefined> {
    try {
      let res = await fetch(`${this.InvoiceBaseApi}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<InvoiceResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async UpdateInvoice(
    { invoice_id }: { invoice_id: number },
    input: UpdateInvoiceBody
  ) {
    try {
      let res = await fetch(`${this.InvoiceBaseApi}/${invoice_id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<InvoiceResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async GetInvoice({
    invoice_id,
  }: {
    invoice_id: number
  }): Promise<InvoiceResponse | undefined> {
    try {
      let res = await fetch(`${this.InvoiceBaseApi}/${invoice_id}`, {
        method: "GET",
        headers: this.headers,
      })
      return res.json() as Promise<InvoiceResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async SearchForInvoice({
    keyword,
    page,
    page_size,
  }: {
    keyword?: string
    page?: number
    page_size?: number
  }): Promise<InvoiceResponse | undefined> {
    try {
      let res = await fetch(
        `${this.InvoiceBaseApi}/?keyword=${keyword}&page=${page}&page_size=${page_size}`,
        {
          method: "GET",
          headers: this.headers,
        }
      )
      return res.json() as Promise<InvoiceResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async DeleteInvoice({
    invoice_id,
  }: {
    invoice_id: number
  }): Promise<InvoiceResponse | undefined> {
    try {
      let res = await fetch(`${this.InvoiceBaseApi}/${invoice_id}`, {
        method: "DELETE",
        headers: this.headers,
      })
      return res.json() as Promise<InvoiceResponse>
    } catch (err) {
      console.log(err)
    }
  }
}
