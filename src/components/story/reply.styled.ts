import styled from "styled-components"

export const Wrapper = styled.div`
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

  input,
  textarea {
    width: 100%;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.025em;
  }
`

export const FormRow = styled.div`
  margin-bottom: 28px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #999;
  position: absolute;
  left: 0;
  bottom: -1px;
  transform: scaleX(0);
  transform-origin: 0;
  transition: transform 0.5s;
`

interface ErrorLineProps {
  show: boolean
}

export const ErrorLine = styled(Line)`
  background: #b02626;
  z-index: 10;
  transform: scaleX(${(props: ErrorLineProps) => (props.show ? 1 : 0)});
`

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: calc(50% - 16px);
  padding: 4px 0;
  border-bottom: 1px solid #e5e5e5;

  &:not(:last-child) {
    margin-right: 32px;
  }

  input:not(:last-child) {
    margin-right: 32px;
  }

  input:focus + ${Line} {
    transform: scaleX(1);
  }

  @media (max-width: 480px) {
    width: 100%;

    input {
      margin: 0;
    }

    &:first-child {
      margin-bottom: 28px;
    }
  }
`

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 40px;

  textarea {
    height: 27px;
  }

  textarea:focus + ${Line} {
    transform: scaleX(1);
  }
`

export const Button = styled.button`
  cursor: pointer;
  background: #212121;
  padding: 16px 32px;

  span {
    color: #fff;
    font-size: 11px;
    letter-spacing: 0.5em;
  }
`
