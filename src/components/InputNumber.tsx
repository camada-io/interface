'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useAccount } from 'wagmi'

type Token = {
  address?: string
  icon: string
  name: string
}

type InputNumberProps = {
  amountLabel?: string
  balanceLabel?: string
  showTokenIcon?: boolean
  balance: number | string
  tokens?: Token[]
  isLoading?: boolean
  disabled?: boolean
  onSelectToken?: (token: Token) => void
  onInputChange?: (amount: number) => void
}

export function InputNumber({
  amountLabel = 'Amount',
  balanceLabel = '',
  balance = '',
  showTokenIcon = true,
  tokens = [],
  disabled = false,
  onSelectToken,
  onInputChange,
  isLoading,
}: InputNumberProps) {
  const [amount, setAmount] = useState<number | string>('')
  const { isConnected } = useAccount()

  useEffect(() => {
    if (disabled && +balance > 0) {
      setAmount(+balance)
      !!onInputChange && onInputChange(+balance)
    }
    // eslint-disable-next-line
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || +e.target.value <= +balance) {
      setAmount(+e.target.value || '')
      !!onInputChange && onInputChange(+e.target.value || 0)
    }
  }

  return (
    <div className="flex w-full bg-gray-500 rounded-[8px] border-[1px] border-solid border-whiteAlpha-100 py-[10px] px-[14px] justify-center items-center gap-4">
      {!!tokens.length && showTokenIcon && (
        <div
          className={` rounded-[10px] ${
            tokens.length > 1 && 'bg-gray-600 p-[8px]'
          }`}
        >
          {tokens.length > 1 ? (
            <TokenSelector tokens={tokens} onSelectToken={onSelectToken} />
          ) : (
            tokens.map((token) => (
              <div className="w-[45px] h-[45px]" key={token.name}>
                <Image
                  src={token.icon}
                  alt={token.name}
                  width={45}
                  height={45}
                />
              </div>
            ))
          )}
        </div>
      )}
      <div className="flex flex-col w-full">
        {!isLoading && isConnected && (
          <div className="flex w-full justify-between text-whiteAlpha-500 text-weight-[400]">
            <p>{amountLabel}</p>
            <p className="max-[639px]:hidden">{`${balanceLabel} ${Number(
              balance,
            ).toFixed()}`}</p>
          </div>
        )}
        <div className="flex w-full gap-8">
          <input
            disabled={disabled && +balance > 0}
            type="number"
            className="flex w-full bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
          text-whiteAlpha-100 text-whiteAlpha-1000 font-bold text-[18px]"
            placeholder="0"
            value={amount ?? ''}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className="bg-whiteAlpha-300 rounded-[100px] py-[2px] px-[16px] text-brandBlue-100"
            onClick={() => {
              setAmount(+balance)
              onInputChange?.(+balance)
            }}
          >
            MAX
          </button>
        </div>
      </div>
    </div>
  )
}

function TokenSelector({
  tokens,
  onSelectToken,
}: {
  tokens: Token[]
  onSelectToken?: (token: Token) => void
}) {
  const [selectedToken, setSelectedToken] = useState(tokens[0])
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token)
    setIsSelectorOpen(false)
    !!onSelectToken && onSelectToken(token)
  }

  return (
    <div className="relative">
      <div
        className=" flex gap-2 items-center cursor-pointer"
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
      >
        <div className="w-[45px] h-[45px]">
          <Image
            src={selectedToken.icon}
            alt={selectedToken.name}
            width={45}
            height={45}
          />
        </div>

        {isSelectorOpen ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </div>

      <div
        className={`absolute left-[-8px] top-[55px] w-[calc(100%+16px)] p-[8px] bg-gray-700 rounded-[10px] ${
          isSelectorOpen ? 'flex' : 'hidden'
        }`}
      >
        {tokens
          .filter((token) => token.name !== selectedToken.name)
          .map((token) => {
            return (
              <div
                className="cursor-pointer w-full"
                key={token.name}
                onClick={() => handleSelectToken(token)}
              >
                <Image
                  src={token.icon}
                  alt={token.name}
                  width={45}
                  height={45}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
