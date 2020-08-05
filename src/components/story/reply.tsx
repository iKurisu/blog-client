import React, {
  SyntheticEvent,
  useState,
  FormEvent,
  useRef,
  SetStateAction,
  Dispatch,
} from "react"

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
import { Comment } from "./types"

interface Props {
  slug: string
  replyingTo: Comment | null
  setReplyingTo: Dispatch<SetStateAction<Comment | null>>
  fetchComments: () => Promise<void>
}

const Reply = ({ slug, replyingTo, setReplyingTo, fetchComments }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)

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

  const resetForm = (): void => {
    nameRef.current!.value = ""
    emailRef.current!.value = ""
    commentRef.current!.value = ""
  }

  const submitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidName || !isValidEmail || !isValidComment) return

    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const content = commentRef.current?.value

    const response = await fetch("http://localhost:1337/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: { name, email }, content, slug }),
    })

    const jsonResponse = await response.json()

    if (jsonResponse.constraint === "custom_users_email_unique") {
      setIsValidEmail(false)
    } else if (jsonResponse.constraint === "custom_users_name_unique") {
      setIsValidName(false)
    } else {
      if (replyingTo) {
        await fetch(`http://localhost:1337/comments/${replyingTo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            replies: replyingTo.replies
              .map(reply => reply.id)
              .concat(jsonResponse.id),
          }),
        })

        setReplyingTo(null)
      }

      fetchComments()
      resetForm()
    }
  }

  return (
    <Wrapper>
      <ReplyHeading>
        <h3>
          Leave a Reply{" "}
          {replyingTo && (
            <span onClick={() => setReplyingTo(null)}>Cancel replay</span>
          )}
        </h3>
        <span>Your email address will not be published</span>
      </ReplyHeading>
      <Form onSubmit={submitComment}>
        <FormRow>
          <InputWrapper>
            <input
              name="name"
              placeholder="Name"
              onBlur={validateName}
              ref={nameRef}
            />
            <Line />
            <ErrorLine show={isValidName === false} />
          </InputWrapper>
          <InputWrapper>
            <input
              name="email"
              placeholder="Email"
              onBlur={validateEmail}
              ref={emailRef}
            />
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
              ref={commentRef}
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
