import { useEffect } from "react"
import { UAParser } from "ua-parser-js"

export function useUA() {
  const ua = ""
  const parser = new UAParser(ua)
  const { type } = parser.getDevice()

  const isMobile = type === "mobile" || type === "tablet"
  const platform = parser.getOS().name
  const isIOS = platform === "iOS"

  useEffect(() => {
    if (window) parser.setUA(window.navigator.userAgent)
    // eslint-disable-next-line
  }, [])

  return {
    type,
    isMobile,
    platform,
    isIOS,
  }
}
