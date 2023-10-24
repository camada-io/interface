'use client'

import { useEffect, useState } from 'react'
import Modal from '../Modal'
import Image from 'next/image'
import { Connector, useConnect } from 'wagmi'
import { useStore } from 'zustand'
import { useConnectWallet } from '@/stores/connectWallet'

export function ConnectWallet() {
  const { connectors, connectAsync } = useConnect()
  const [isPali, setIsPali] = useState(false)
  const { isOpen, onClose } = useStore(useConnectWallet)

  const metamask = connectors.find((c) => c.id === 'metaMask')
  const injected = connectors.find((c) => c.id === 'injected')
  const walletConnect = connectors.find((c) => c.id === 'walletConnect')

  const connect = async (connector: Connector<any, any> | undefined) => {
    try {
      await connectAsync({ connector })
      setTimeout(onClose, 2500)
    } catch (error) {
      console.error(error)
    }
  }

  const getPaliConnector = async () => {
    const provider = await injected?.getProvider()

    if (provider && provider?.wallet === 'pali-v2') {
      setIsPali(true)
    }
  }

  useEffect(() => {
    getPaliConnector()

    addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    })

    return () => {
      addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          onClose()
        }
      })
    }
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-700 w-full rounded-[20px]">
        <div className="flex items-start h-[370px]  w-full">
          <div className="max-[639px]:hidden relative h-full w-[280px] bg-no-repeat bg-[url('/images/connect-wallet-bg.png')]">
            <Image
              src="/images/connect-wallet-image.png"
              alt=""
              fill
              sizes="(100vw, 100vh)"
              className="rounded-[20px] pointer-events-none w-full object-cover"
            />
          </div>
          <div className="px-[48px] max-w-[400px] max-[639px]:px-[30px] h-full text-left flex flex-col justify-center">
            <h3 className="font-bold text-2xl">Connect Wallet</h3>
            <p className="mt-4 text-gray-300">
              By connecting a wallet, you agree to the CAMADA{' '}
              <a href="#" className="underline">
                Terms of Use
              </a>
              .
            </p>

            <button
              type="button"
              disabled={!(isPali ? injected : metamask)?.ready}
              className="p-[8px] rounded-[5px] bg-gray-900 flex items-center mt-6 gap-4 w-full border-[1px] border-gray-600 hover:bg-brandBlue-200 transition:all duration-300"
              onClick={() => connect(isPali ? injected : metamask)}
            >
              <Image
                src={`/images/${isPali ? 'pali' : 'metamask'}.png`}
                width={30}
                height={30}
                alt=""
              />
              <p>{isPali ? 'Pali Wallet' : 'Metamask'}</p>
            </button>

            <button
              type="button"
              className="p-[8px] rounded-[5px] bg-gray-900 flex items-center gap-4 mt-2 w-full border-[1px] border-gray-600 hover:bg-brandBlue-200 transition:all duration-300"
              onClick={() => connect(walletConnect)}
            >
              <Image
                src={'/images/wallet-connect.png'}
                width={30}
                height={30}
                alt=""
              />
              <p>Wallet Connect</p>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-[8px] rounded-[5px] bg-gray-900 mt-6 text-center w-full border-[1px] border-brandBlue-100 hover:bg-whiteAlpha-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
