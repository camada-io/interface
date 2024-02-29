"use client"

import { PageHeader } from "@/components/PageHeader"
import { colors } from "@/utils/colors"
import { FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { ContactForm } from "./forms/contactForm"
import { ContactFormValues } from "@/types/forms"
import { useMutation } from "@apollo/client"
import { SEND_CONTACT } from "@/Apollo/queries/mail"
import { Alert } from "@/components/Alert"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const [sendContactEmail] = useMutation(SEND_CONTACT)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const { reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const handleFormSubmit = async (data: ContactFormValues) => {
    setIsSending(true)

    await sendContactEmail({
      variables: {
        input: data,
      },
    })
      .then(() => {
        reset()
        setError(false)
        setShowAlert(true)
        setIsSending(false)
      })
      .catch((_) => {
        setIsSending(false)
        setError(true)
        setShowAlert(true)
        reset()
      })
  }

  const SocialIcon = ({
    children,
    label,
  }: {
    children: any
    label: string
  }) => (
    <div className="pr-4 bg-white bg-opacity-5 rounded flex items-center gap-2">
      <div className="p-2 bg-white bg-opacity-5 inline-flex items-center gap-2.5">
        {children}
      </div>
      <div className="pb-1 flex items-center gap-2.5">
        <div className="text-white text-xl font-normal leading-[30px]">
          {label}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageHeader
        title={"Stay in touch!"}
        description={
          "Contact us to create a partnership, solve some doubts, or invest on Camada."
        }
      />
      <div className="flex w-full h-full p-[32.5px] lg:py-32 justify-center">
        <div className="flex flex-col lg:flex-row max-w-[1240px] w-full h-full justify-between items-start gap-6">
          <div className="flex grow shrink basis-0 lg:px-[50px] flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center w-12 h-12 bg-brandBlue-200 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[260px] text-2xl font-extrabold leading-10 text-white">
                Socials
              </div>
              <div className="flex items-center gap-5">
                <SocialIcon label="@camada">
                  {
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0612323 0L9.77692 13.2374L0 24H2.20057L10.7604 14.5769L17.6763 24H25.1644L14.9019 10.0182L24.0023 0H21.8017L13.9188 8.67818L7.54933 0H0.0612323ZM3.29726 1.65155H6.73726L21.928 22.3484H18.488L3.29726 1.65155Z"
                        fill={colors.brandBlue[200]}
                      />
                    </svg>
                  }
                </SocialIcon>
                <SocialIcon label="camada.io">
                  <FaTelegramPlane
                    size={18}
                    style={{ color: colors.brandBlue[200] }}
                  />
                </SocialIcon>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center w-12 h-12 bg-brandBlue-200 rounded-full">
                <AiOutlineMail size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-[260px] text-2xl font-extrabold leading-10 text-white">
                  Email
                </div>
                <div className="w-[261px] text-xl font-normal leading-[30px] text-white">
                  contact@camada.io
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[620px] w-full h-full flex flex-col gap-4">
            <ContactForm
              defaultValues={{ name: "", email: "", message: "" }}
              onSubmit={handleFormSubmit}
              isSending={isSending}
            />
            <Alert
              maxWidth="max-w-[620px] flex w-full"
              show={showAlert}
              isError={error}
            />
          </div>
        </div>
      </div>
    </>
  )
}
