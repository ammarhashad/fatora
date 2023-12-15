// Body types

export type CreateProductBody = {
  name: string
  price?: number
  code?: string
  sku?: string
  image?: string
  description?: string
  language?: string
  currency?: string
  status?: string
  category?: string
  settings?: {
    is_public: boolean
    is_limited: boolean
    is_casheir: boolean
    max_count: number
    max_order: number
  }
}

// Response types
export type CreateBodyResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  product?: {
    id: number
    name: string
    price: number
    sku: string
    image: string
    qr_code: string
    description: string
    setting: {
      is_public: boolean
      is_limited: boolean
      is_casheir: boolean
      max_count: number
      max_order: number
    }
    creation_date: string
    category: string
    language: string
    currency: string
    status: string
  }
}
