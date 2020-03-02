import React from "react"

import {
  Wrapper,
  CommentsHeading,
  StyledComment,
  Author,
  PublishDate,
  Content,
  Reply,
} from "./comments.styled"
import { Comment } from "./types"

interface Props {
  comments: Comment[]
}

const formatDate = (date: string): string => {
  const d = new Date(date)
  const [, day, month, year, time] = d.toUTCString().split(" ")
  const [hours, minutes] = time.split(":")

  return `${month} ${day}, ${year} at ${hours}:${minutes}`
}

const Comments = ({ comments }: Props) => {
  return (
    <Wrapper>
      <CommentsHeading>
        <h3>Comments</h3>
      </CommentsHeading>
      {comments.map(comment => (
        <StyledComment key={comment.id}>
          <Author>{comment.author.name}</Author>
          <PublishDate>{formatDate(comment.created_at)}</PublishDate>
          <Content>{comment.content}</Content>
          <Reply>reply</Reply>
        </StyledComment>
      ))}
    </Wrapper>
  )
}

export default Comments
