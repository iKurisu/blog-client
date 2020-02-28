import React, { SyntheticEvent, useState } from "react"

import {
  Wrapper,
  ReplyHeading,
  Form,
  FormRow,
  InputWrapper,
  Line,
  ErrorLine,
  TextareaWrapper,
  Button,
} from "./reply.styled"

const Reply = () => {
  const [isValidName, setIsValidName] = useState<boolean>()
  const [isValidEmail, setIsValidEmail] = useState<boolean>()
  const [isValidComment, setIsValidComment] = useState<boolean>()

  const validateName = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    setIsValidName(value.length >= 4 && value.length <= 20)
  }

  const validateEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    setIsValidEmail(/\w+@\w+\.\w+/.test(value))
  }

  const validateComment = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget

    setIsValidComment(value.length > 0)
  }

  return (
    <Wrapper>
      <ReplyHeading>
        <h3>Leave a Reply</h3>
        <span>Your email address will not be published</span>
      </ReplyHeading>
      <Form>
        <FormRow>
          <InputWrapper>
            <input name="name" placeholder="Name" onBlur={validateName} />
            <Line />
            <ErrorLine show={isValidName === false} />
          </InputWrapper>
          <InputWrapper>
            <input name="email" placeholder="Email" onBlur={validateEmail} />
            <Line />
            <ErrorLine show={isValidEmail === false} />
          </InputWrapper>
        </FormRow>
        <FormRow>
          <TextareaWrapper>
            <textarea
              name="comment"
              placeholder="Comment"
              onBlur={validateComment}
            />
            <Line />
            <ErrorLine show={isValidComment === false} />
          </TextareaWrapper>
        </FormRow>
        <FormRow>
          <Button type="submit">
            <span>POST COMMENT</span>
          </Button>
        </FormRow>
      </Form>
    </Wrapper>
  )
}

export default Reply
