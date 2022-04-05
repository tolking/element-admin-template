export interface GoodsQuery {
  title?: string
  cates?: string
}

export interface GoodsForm {
  id?: string
  title: string
  price: number
  cost?: number
  stock: number
  cates: string
  tags: string[]
  time?: [string, string]
  start: string
  end: string
  desc: string
  length?: number
  width?: number
  height?: number
  weight?: number
  sku?: Array<{
    key: string
    value: string[]
  }>
}

export interface GoodsItem extends Required<GoodsForm> {
  createTime: string
}
