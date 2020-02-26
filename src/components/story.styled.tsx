import styled from "styled-components"

export const Reply = styled.div`
  max-width: 760px;
  margin: auto;
`

export const ReplyHeading = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 19.3px;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
  }

  span {
    color: #999;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.05em;
  }
`

export const Form = styled.form`
  margin-bottom: 64px;
`

export const FormRow = styled.div`
  margin-bottom: 16px;
`

export const Input = styled.input`
  font-size: 15px;
  letter-spacing: 0.025em;
  font-weight: 300;
  width: calc(50% - 16px);
  padding: 4px 0;
  margin-bottom: 12px;
  border-bottom: 1px solid #e5e5e5;

  &:not(:last-child) {
    margin-right: 32px;
  }
`
export const Textarea = styled.textarea`
  font-size: 15px;
  letter-spacing: 0.025em;
  font-weight: 300;
  width: 100%;
  height: 31px;
  border-bottom: 1px solid #e5e5e5;
`
