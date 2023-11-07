import * as yup from "yup"

export const schemaContact = yup.object({
  name: yup.string().required("Fill this field correctly"),
  email: yup.string().email("Insert a valid email").required(),
  message: yup.string().required("Fill this field correctly"),
})
