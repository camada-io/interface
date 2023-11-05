import * as yup from "yup"

export const schemaStepOne = yup.object({
  name: yup.string().required("Fill this field correctly"),
  email: yup.string().email("Insert a valid email").required(),
  nameProject: yup.string().nullable(), // It can be null, empty or any string
  emailProject: yup.string().email("Insert a valid email").nullable(), // It can be null, empty or a valid email
  agreedTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required(),
})

export const schemaStepTwo = yup.object({
  projectName: yup.string().required("Fill this field correctly"),
  about: yup.string().required("Fill this field correctly"),
})

export const schemaStepThree = yup.object({
  agreedResearch: yup
    .boolean()
    .oneOf([true], "You must accept the KYC recommendation")
    .required(),
})

export const schemaStepFour = yup.object({
  agreedUpfront: yup
    .boolean()
    .oneOf([true], "You must accept the UpFront costs recommendation")
    .required(),
})
