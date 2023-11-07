"use client"

import { PageHeader } from "@/components/PageHeader"
import { colors } from "@/utils/colors"
import { FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { ContactForm } from "./forms/contactForm"
import { ContactFormValues } from "@/types/forms"
import { useMutation } from "@apollo/client"
import { SEND_EMAIL } from "@/Apollo/queries/mail"

export default function Contact() {
  const [sendEmail] = useMutation(SEND_EMAIL)

  const handleFormSubmit = async (data: ContactFormValues) => {
    data.email
    await sendEmail({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      <PageHeader
        title={"Stay in touch!"}
        description={
          "Contact us to create a partnership, solve some doubts, or invest on Camada."
        }
      />
      <div className="flex w-full h-full p-[32.5px] lg:p-32 justify-center">
        <div className="flex flex-col lg:flex-row max-w-[1240px] w-full h-full justify-between items-start gap-6">
          <div className="hidden grow shrink basis-0 px-[50px] flex-col justify-start items-start gap-10 lg:inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="flex justify-center items-center w-12 h-12 relative bg-brandBlue-200 rounded-full justify-center items-center">
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
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="w-[260px] text-white text-2xl font-extrabold leading-10">
                  Socials
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                  <div className="pr-4 bg-white bg-opacity-5 rounded justify-start items-center gap-2 flex">
                    <div className="p-2 bg-white bg-opacity-5 flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="flex fw-[18px] h-[18px] relative">
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
                      </div>
                    </div>
                    <div className="pb-1 justify-start items-center gap-2.5 flex">
                      <div className="text-white text-xl font-normal leading-[30px]">
                        @camada
                      </div>
                    </div>
                  </div>
                  <div className="pr-4 bg-white bg-opacity-5 rounded justify-start items-center gap-2 flex">
                    <div className="p-2 bg-white bg-opacity-5 flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[18px] h-[18px] relative">
                        <FaTelegramPlane
                          size={18}
                          style={{ color: colors.brandBlue[200] }}
                        />
                      </div>
                    </div>
                    <div className="pb-1 justify-start items-center gap-2.5 flex">
                      <div className="text-white text-xl font-normal leading-[30px]">
                        camada.io
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="flex justify-center items-center w-12 h-12 relative bg-brandBlue-200 rounded-full justify-center items-center">
                <AiOutlineMail size={24} />
              </div>
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="w-[260px] text-white text-2xl font-extrabold leading-10">
                  Email
                </div>
                <div className="w-[261px] text-white text-xl font-normal leading-[30px]">
                  contact@camada.io
                </div>
              </div>
            </div>
          </div>

          <ContactForm
            defaultValues={{ name: "", email: "", message: "" }}
            onSubmit={(data) => handleFormSubmit(data)}
          />

          <div className="lg:hidden grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="w-12 h-12 relative bg-brandBlue-200 rounded-full justify-center items-center">
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
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="w-[260px] text-white text-2xl font-extrabold leading-10">
                  Socials
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                  <div className="pr-4 bg-white bg-opacity-5 rounded justify-start items-center gap-2 flex">
                    <div className="p-2 bg-white bg-opacity-5 flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[18px] h-[18px] relative">
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
                      </div>
                    </div>
                    <div className="pb-1 justify-start items-center gap-2.5 flex">
                      <div className="text-white text-xl font-normal leading-[30px]">
                        @camada
                      </div>
                    </div>
                  </div>
                  <div className="pr-4 bg-white bg-opacity-5 rounded justify-start items-center gap-2 flex">
                    <div className="p-2 bg-white bg-opacity-5 flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="w-[18px] h-[18px] relative">
                        <FaTelegramPlane
                          size={18}
                          style={{ color: colors.brandBlue[200] }}
                        />
                      </div>
                    </div>
                    <div className="pb-1 justify-start items-center gap-2.5 flex">
                      <div className="text-white text-xl font-normal leading-[30px]">
                        camada.io
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="w-12 h-12 relative bg-brandBlue-200 rounded-full justify-center items-center">
                <AiOutlineMail size={24} />
              </div>
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="w-[260px] text-white text-2xl font-extrabold leading-10">
                  Email
                </div>
                <div className="w-[261px] text-white text-xl font-normal leading-[30px]">
                  contact@camada.io
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
