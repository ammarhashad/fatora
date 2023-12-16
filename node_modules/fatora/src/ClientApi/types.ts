// Body types
export type CreateClientBody = {
  name: string
  phone?: string
  email: string
  address?: string
  notes?: string
}

export type ListClientBody = {
  email: string
  keyword?: string
  page?: number
  page_size?: number
}

export type UpdateClientBody = {
  name: string
  phone?: string
  email: string
  address?: string
  notes?: string
}
// Response Types

export type CreatClientResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  client?: CreateClientBody
}

export type GetClientResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  client?: CreateClientBody
}

export type ListClientResponse = {
  status: string
  error?: {
    error_code: string
    description: string
  }
  clients?: [
    {
      id: number
      name: string
      address: string
      phone: string
      email: string
      notes: string
    }
  ]
  total?: number
  page_size?: number
  page?: number
}
export type UpdateClientResponse = {
  status: string
  client?: {
    id: number
    name: string
    phone: string
    email: string
    address: string
    note: string
  }
  error?: {
    error_code: string
    description: string
  }
}
