import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk"
import { Wallet, JsonRpcProvider } from "ethers"

const easContractAddress = process.env.NEXT_PUBLIC_EAS_ADDRESS as string
const schemaUID = process.env.NEXT_PUBLIC_SCHEMA_UID as string
const privateKey = process.env.NEXT_PUBLIC_PK as string
const env = process.env.NEXT_PUBLIC_APP_ENV as "development" | "production"
const eas = new EAS(easContractAddress)
const rpc = {
  development: "https://rpc-tanenbaum.rollux.com",
  production: "https://rpc.rollux.com",
}

const provider = new JsonRpcProvider(rpc[env])
const signer = new Wallet(privateKey, provider)

export async function attest(address: string) {
  await eas.connect(signer as any)

  const schemaEncoder = new SchemaEncoder("bool whitelist")

  const encodedData = schemaEncoder.encodeData([
    { name: "whitelist", value: true, type: "bool" },
  ])

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: address,
      expirationTime: BigInt(0),
      revocable: true,
      data: encodedData,
    },
  })

  await tx.wait()
}
