import React, { useState, useEffect } from "react"

import {
  Wrapper,
  CommentsHeading,
  Comment,
  Author,
  PublishDate,
  Content,
  Reply,
} from "./comments.styled"

interface Props {
  slug: string
}

interface Comment {
  id: number
  author: {
    name: string
  }
  created_at: string
  content: string
  replies: Comment[]
}

const formatDate = (date: string): string => {
  const d = new Date(date)
  const [, day, month, year, time] = d.toUTCString().split(" ")
  const [hours, minutes] = time.split(":")

  return `${month} ${day}, ${year} at ${hours}:${minutes}`
}

const Comments = ({ slug }: Props) => {
  const [comments, setComments] = useState<Comment[]>([])

  const updateComments = async () => {
    const response = await fetch(`http://localhost:1337/comments?slug=${slug}`)
    const jsonResponse = await response.json()

    setComments(jsonResponse)
  }

  useEffect(() => {
    updateComments().catch(console.error)
  }, [])

  return (
    <Wrapper>
      <CommentsHeading>
        <h3>Comments</h3>
      </CommentsHeading>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Author>{comment.author.name}</Author>
          <PublishDate>{formatDate(comment.created_at)}</PublishDate>
          <Content>{comment.content}</Content>
          <Reply>reply</Reply>
        </Comment>
      ))}
    </Wrapper>
  )
}

export default Comments
