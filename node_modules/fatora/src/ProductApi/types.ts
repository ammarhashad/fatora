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

export type UpdateProductBody = {
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

export type SearchProductBody = {
  q?: string
  status?: string
  page?: number
  page_size?: number
  from?: Date
  to?: Date
  id?: number
  sku?: string
  is_cashier?: boolean
  is_public?: boolean
  category?: string
  min?: number
  max?: number
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

export type UpdateProductResponse = {
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

export type DeleteProductResponse = {
  status: string
  error?: string
}

export type GetProductResponse = {
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
