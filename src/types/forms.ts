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

export type StepFiveFormValues = {
  aboutUs?: string | null
  decideWork?: string | null
  feedback?: string | null
}

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ProjectFormValues = {
  name: string
  email: string
  nameProject: string
  emailProject: string
  agreedTerms: boolean
  projectName: string
  about: string
  agreedResearch: boolean
  agreedUpfront: boolean
  aboutUs: string
  decideWork: string
  feedback: string
}
