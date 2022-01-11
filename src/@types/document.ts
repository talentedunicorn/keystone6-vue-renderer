export default interface IDocItem {
  type: 'paragraph' | 'blockquote' | 'code' | 'heading' | 'unordered-list' | 'ordered-list'
  level?: number
  children: {
    text: string
    underline?: boolean
    strikethrough?: boolean
    italic?: boolean
    code?: boolean
    bold?: boolean
    type?: 'link'
    href?: string
    children?: IDocItem['children']
  }[]
}
