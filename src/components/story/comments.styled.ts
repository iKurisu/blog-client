import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 760px;
  margin: 0 auto 64px;
`

export const CommentsHeading = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 24px;

  h3 {
    font-size: 19.3px;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin-bottom: 16px;
  }
`

export const CommentWrapper = styled.div`
  margin-bottom: 48px;
`

export const ReplyWrapper = styled.div`
  margin-left: 12px;
  border-left: 1px solid #e5e5e5;
  padding-left: 20px;
`

export const StyledComment = styled.div`
  margin-bottom: 28px;
`

export const Author = styled.h3`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
`

export const PublishDate = styled.span`
  display: inline-block;
  color: #999;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
`

export const Content = styled.p`
  margin-bottom: 12px;
`

export const ReplyButton = styled.span`
  color: #b02626;
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 0.06em;
`
