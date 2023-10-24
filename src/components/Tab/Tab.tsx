import { cloneElement } from 'react'

type TabProps = {
  children: React.ReactElement
  label: string
}

export function Tab({ children, label }: TabProps) {
  return cloneElement(children, {
    label,
  })
}
