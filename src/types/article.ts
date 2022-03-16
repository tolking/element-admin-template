export interface ArticleQuery {
  title?: string
  author?: string
}

export interface ArticleForm extends ArticleQuery {
  id?: string
  tag?: string[]
  content?: string
}

export interface ArticleItem extends Required<ArticleForm> {
  createTime: string
}
