export function checkUserAuthenticated(
  isConnected: boolean,
  address: `0x${string}` | undefined,
) {
  if (typeof window !== "undefined") {
    const credential = localStorage?.getItem("idos_credential")

    const credentialWallet = credential?.split(":")[0] ?? null

    if (isConnected && credentialWallet === address) {
      return true
    }
  }

  return false
}
