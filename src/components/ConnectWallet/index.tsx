"use client"

import { useConnectWallet } from "@/stores/connectWallet"
import { TransactionModal } from "../TransactionModal"
import { CheckNetwork } from "../TransactionModal/steps/CheckNetwork"
import { ConnectWallet } from "../TransactionModal/steps/ConnectWallet"

export function ConnectWalletModal() {
  const state = useConnectWallet((state) => state)

  return (
    <TransactionModal modalState={state}>
      <ConnectWallet state={state} />
      <CheckNetwork state={state} />
    </TransactionModal>
  )
}
