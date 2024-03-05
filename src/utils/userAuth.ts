export function checkUserAuthenticated(
  isConnected: boolean,
  address: `0x${string}` | undefined,
) {
  if (typeof window !== "undefined") {
    const wallet = localStorage?.getItem("validated_wallet")

    if (isConnected && wallet === address) {
      return true
    }
  }

  return false
}
