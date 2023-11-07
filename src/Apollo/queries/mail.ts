import { gql } from "@apollo/client"

export const SEND_EMAIL = gql`
  mutation SendEmail($input: EmailInput!) {
    sendEmail(input: $input) {
      success
      message
    }
  }
`
