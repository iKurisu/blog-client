export interface Comment {
  id: number
  author: {
    name: string
  }
  created_at: string
  content: string
  replies: Comment[]
}
