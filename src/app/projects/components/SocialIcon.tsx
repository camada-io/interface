import { FaDiscord, FaGlobe, FaTelegramPlane } from "react-icons/fa"
import { GrMedium } from "react-icons/gr"

export type IconNames = "twitter" | "telegram" | "discord" | "medium" | "site"

export function SocialIcon({ name }: { name: IconNames }) {
  return {
    twitter: (
      <svg
        width="27.4"
        height="27.4"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0612323 0L9.77692 13.2374L0 24H2.20057L10.7604 14.5769L17.6763 24H25.1644L14.9019 10.0182L24.0023 0H21.8017L13.9188 8.67818L7.54933 0H0.0612323ZM3.29726 1.65155H6.73726L21.928 22.3484H18.488L3.29726 1.65155Z"
          fill="white"
        />
      </svg>
    ),
    telegram: <FaTelegramPlane size={27.4} />,
    discord: <FaDiscord size={27.4} />,
    medium: <GrMedium size={27.4} />,
    site: <FaGlobe size={27.4} />,
  }[name]
}