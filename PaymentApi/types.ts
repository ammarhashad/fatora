// INPUT TYPES
export type CheckoutBody = {
  amount: number
  currency?: string
  order_id?: string
  client?: {
    name: string
    phone: string
    email: string
  }
  language?: string
  success_url?: string
  failure_url?: string
  fcm_token?: string
  save_token?: boolean
  note?: string
}

export type TokenizeBody = {
  card_token: string
  order_id: string
  amount?: number
}

export type RefundBody = {
  transaction_id: string
  order_id: string
}

export type VerifyPaymentBody = {
  transaction_id: string
  order_id: string
}

// RESPONSE TYPE
export type CheckoutResponse = {
  status: string
  result?: {
    checkout_url: string
  }
  error?: {
    description: string
  }
}

export type TokenizationResponse = {
  status: string
  result?: string[]
  error?: {
    error_code: string
    description: string
  }
}

enum refundStatus {
  completed = "completed",
  under_proccession = "under_proccession",
}
enum Mode {
  live = "live",
  test = "test",
}

export type RefundResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  result?: {
    refund_status: refundStatus
    mode: Mode
    refund_transaction_id: any
  }
}

export type VerifyPaymentResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  result?: {
    order_id: string
    transaction_id: string
    amount: number
    currency: string
    client: {
      name: string
      email: string
      phone: string
    }
    note: string
    payment_date: string
    payment_status: string
    mode: Mode
    auth_code: string
    exchange_details: {
      exchange_rate: string
      amount: string
      currency: string
    }

    transfer_details: {
      interchange_fees: string
      rate: number
      transfer_number: string
    }
    description: string
    card_token: string
    refund_details: null | {
      status: string
      transfer_number: string
      refund_transaction_id: string
    }

    card_details: {
      card_type: string
      last_4_digits: string
      type: string
    }
  }
}
