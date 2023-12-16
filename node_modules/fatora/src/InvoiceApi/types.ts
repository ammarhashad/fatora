// Body Types

export type CreateInvoiceBody = {
  title?: string
  description: string
  amount: number
  date?: string
  //   not written in docs but shown in  example
  due_date: string
  status?: string
  number?: string
  currency?: string
  client?: {
    name: string
    email: string
    phone: string
    address: string
  }
  note?: string
  type?: string

  terms_conditions?: string
  items: [
    {
      product_id?: string
      description?: string
      qty?: number
      amount: number
    }
  ]
  payments: [
    {
      payment_date: string
      transaction_id?: string
      amount: number
      note?: string
      payment_type?: string
      status?: string
    }
  ]
  settings?: {
    tax: boolean
    discount: number
    discount_type: string
    language: string
    accepted_payment_methods: {
      card: boolean
      bank_account: boolean
      cash: boolean
      paypal: boolean
      e_signature: boolean
    }
  }
}

export type UpdateInvoiceBody = {
  title?: string
  description: string
  amount: number
  date?: string
  //   not written in docs but shown in  example
  due_date: string
  status?: string
  number?: string
  currency?: string
  client?: {
    name: string
    email: string
    phone: string
    address: string
  }
  note?: string
  type?: string

  terms_conditions?: string
  items: [
    {
      product_id?: string
      description?: string
      qty?: number
      amount: number
    }
  ]
  payments: [
    {
      payment_date: string
      transaction_id?: string
      amount: number
      note?: string
      payment_type?: string
      status?: string
    }
  ]
  settings?: {
    tax: boolean
    discount: number
    discount_type: string
    language: string
    accepted_payment_methods: {
      card: boolean
      bank_account: boolean
      cash: boolean
      paypal: boolean
      e_signature: boolean
    }
  }
}

// RESPONSE TYPES

export type InvoiceResponse = {
  success?: boolean
  status: string
  error?: {
    error_code: string
    description: string
  }
  invoice?: {
    id: number
    number: string
    amount: number
    currency: string
    terms_conditions: string
    note: string
    due_date: string
    date: string
    status: string
    type: string
    client: {
      id: number
      address: string
      phone: string
      email: string
      notes: string | null
    }
    title: string
    link: string
    description: string | null
    items: [
      {
        id: number
        product_id: number
        description: string
        type: string
        qty: number
        amount: number
      }
    ]
    payments: [
      {
        id: number
        payment_date: string
        transaction_id: string
        amount: number
        note: string
        payment_type: string
        status: string
      }
    ]
    setting: {
      tax: boolean
      discount: number
      discount_type: string
      language: string
      accepted_payment_methods: {
        card: boolean
        bank_account: boolean
        cash: boolean
        paypal: boolean
        e_signature: boolean
      }
    }
    total?: number
    page_size?: number
    page?: number
  }
}
