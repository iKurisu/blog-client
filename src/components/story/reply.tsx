import React from "react"

import {
  Wrapper,
  ReplyHeading,
  Form,
  FormRow,
  InputWrapper,
  Line,
  TextareaWrapper,
} from "./reply.styled"

const Reply = () => (
  <Wrapper>
    <ReplyHeading>
      <h3>Leave a Reply</h3>
      <span>Your email address will not be published</span>
    </ReplyHeading>
    <Form>
      <FormRow>
        <InputWrapper>
          <input name="Name" placeholder="Name" />
          <Line />
        </InputWrapper>
        <InputWrapper>
          <input name="Email" placeholder="Email" />
          <Line />
        </InputWrapper>
      </FormRow>
      <FormRow>
        <TextareaWrapper>
          <textarea name="Comment" placeholder="Comment" />
          <Line />
        </TextareaWrapper>
      </FormRow>
    </Form>
  </Wrapper>
)

export default Reply
