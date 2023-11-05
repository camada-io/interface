export type StepOneFormValues = {
  name: string
  email: string
  nameProject?: string | null
  emailProject?: string | null
  agreedTerms: boolean
}

export type StepTwoFormValues = {
  projectName: string
  about: string
}

export type StepThreeFormValues = {
  agreedResearch: boolean
}
export type StepFourFormValues = {
  agreedUpfront: boolean
}
