import { PageHeader } from "@/components/PageHeader"
import Image from "next/image"

export default function NotFound() {
  return (
    <>
      <PageHeader title={"Page not found!"} description={"Error 404."} />
      <div className="layout flex items-center justify-center py-12 lg:py-32">
        <Image
          src="/images/404.svg"
          alt="logo"
          width={542}
          height={400}
          style={{ objectFit: "fill" }}
        />
      </div>
    </>
  )
}
