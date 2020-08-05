import React from "react"

import {
  Wrapper,
  CommentsHeading,
  CommentsPlaceholder,
  CommentWrapper,
  ReplyWrapper,
  StyledComment,
  Author,
  PublishDate,
  Content,
  ReplyButton,
} from "./comments.styled"
import { Comment } from "./types"

interface Props {
  comments: Comment[]
  setReplyingTo: React.Dispatch<React.SetStateAction<Comment | null>>
}

const formatDate = (date: string): string => {
  console.log(date)
  const d = new Date(date)
  const [, day, month, year, time] = d.toUTCString().split(" ")
  const [hours, minutes] = time.split(":")

  return `${month} ${day}, ${year} at ${hours}:${minutes}`
}

const Comments = ({ comments, setReplyingTo }: Props) => {
  const renderComments = (comments: Comment[], isReply = false) => {
    const Wrapper = isReply ? ReplyWrapper : CommentWrapper

    return comments.map(comment => (
      <Wrapper key={comment.id}>
        <StyledComment>
          <Author>{comment.author.name}</Author>
          <PublishDate>{formatDate(comment.created_at)}</PublishDate>
          <Content>{comment.content}</Content>
          <ReplyButton onClick={() => setReplyingTo(comment)}>
            reply
          </ReplyButton>
        </StyledComment>
        {comment.replies && renderComments(comment.replies, true)}
      </Wrapper>
    ))
  }

  return (
    <Wrapper>
      <CommentsHeading>
        <h3>Comments</h3>
      </CommentsHeading>
      {comments.length > 0 ? (
        renderComments(comments)
      ) : (
        <CommentsPlaceholder>There are no comments yet.</CommentsPlaceholder>
      )}
    </Wrapper>
  )
}

export default Comments
