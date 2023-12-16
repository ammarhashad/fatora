import fatoraEndpoint from "../fatoraEndpoint"
import {
  CheckoutBody,
  CheckoutResponse,
  RefundResponse,
  RefundBody,
  TokenizationResponse,
  TokenizeBody,
  VerifyPaymentResponse,
  VerifyPaymentBody,
} from "./types"

export default class PaymentApi {
  private readonly PaymentBaseApi = `${fatoraEndpoint}/payments`
  private readonly headers: Headers
  constructor(headers: Headers) {
    this.headers = headers
  }

  async Checkout(input: CheckoutBody): Promise<CheckoutResponse | undefined> {
    try {
      let res = await fetch(`${this.PaymentBaseApi}/checkout`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<CheckoutResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async CollectTokenizePayment(
    input: TokenizeBody
  ): Promise<TokenizationResponse | undefined> {
    try {
      let res = await fetch(`${this.PaymentBaseApi}/collect-payment`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<TokenizationResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async Refund(input: RefundBody): Promise<RefundResponse | undefined> {
    try {
      let res = await fetch(`${this.PaymentBaseApi}/refund`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<RefundResponse>
    } catch (err) {
      console.log(err)
    }
  }

  async VerifyPayment(
    input: VerifyPaymentBody
  ): Promise<VerifyPaymentResponse | undefined> {
    try {
      let res = await fetch(`${this.PaymentBaseApi}/verify`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(input),
      })

      return res.json() as Promise<VerifyPaymentResponse>
    } catch (err) {
      console.log(err)
    }
  }
}
