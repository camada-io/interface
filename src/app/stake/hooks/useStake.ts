import { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'

import abi from '../../../contracts/stakeAbi'
import tokenAbi from '../../../contracts/erc20Abi'
import launchpadAbi from '../../../contracts/launchpadAbi'

type Address = `0x${string}`

const contractAddres = process.env.NEXT_PUBLIC_STAKE_CONTRACT as Address
const tokenAdress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT as Address
const lauchpadAdress = process.env.NEXT_PUBLIC_LAUNCHPAD_CONTRACT as Address
const appEnv = process.env.NEXT_PUBLIC_APP_ENV as string

export function useStake() {
  const [isLoading, setLoading] = useState(true)
  const { address, connector } = useAccount()
  const [isAllowedChain, setIsAllowedChain] = useState(false)

  useEffect(() => {
    ;(async () => {
      const chainId = await connector?.getChainId()

      const allowedChain = {
        development: 57000,
        production: 570,
      }[appEnv]

      if (chainId === allowedChain) {
        setIsAllowedChain(!isAllowedChain)
      }
    })()
  }, [connector])

  const { data: stakedBalance, isLoading: stakedBalanceLoading } =
    useContractRead({
      address: contractAddres,
      abi: abi,
      functionName: 'balanceOf',
      args: [address as Address],
      enabled: !!address && isAllowedChain,
      watch: !!address && isAllowedChain,
    })

  const { data: earnedBalance, isLoading: earnedBalanceLoading } =
    useContractRead({
      address: contractAddres,
      abi: abi,
      functionName: 'earned',
      args: [address as Address],
      enabled: !!address && isAllowedChain,
    })

  const { data: totalStaked, isLoading: totalStakedLoading } = useContractRead({
    address: contractAddres,
    abi: abi,
    functionName: 'totalSupply',
  })

  const { data: rewardsPerDay, isLoading: rewardsPerDayLoading } =
    useContractRead({
      address: contractAddres,
      abi: abi,
      functionName: 'rewardPerToken',
    })

  const { data: apy, isLoading: apyLoading } = useContractRead({
    address: contractAddres,
    abi: abi,
    functionName: 'apr',
  })

  const { data: tokenBalance, isLoading: tokenBalanceLoading } =
    useContractRead({
      address: tokenAdress,
      abi,
      functionName: 'balanceOf',
      args: [address as Address],
      enabled: !!address && isAllowedChain,
      watch: !!address && isAllowedChain,
    })

  const { data: tokenAllowance, isLoading: tokenAllowanceLoading } =
    useContractRead({
      address: tokenAdress,
      abi: tokenAbi,
      functionName: 'allowance',
      args: [address as Address, contractAddres],
      enabled: !!address && isAllowedChain,
      watch: !!address && isAllowedChain,
    })

  const { data: tokenSymbol, isLoading: tokenSymbolLoading } = useContractRead({
    address: tokenAdress,
    abi: tokenAbi,
    functionName: 'symbol',
  })

  const { data: tier } = useContractRead({
    address: lauchpadAdress,
    abi: launchpadAbi,
    functionName: 'getTier',
    args: [address as Address],
    enabled: !!address && isAllowedChain,
    watch: !!address && isAllowedChain,
  })

  useEffect(() => {
    const loading = [
      stakedBalanceLoading,
      earnedBalanceLoading,
      totalStakedLoading,
      rewardsPerDayLoading,
      apyLoading,
      tokenBalanceLoading,
      tokenSymbolLoading,
    ].every((loading) => loading === false)

    setLoading(!loading)
  }, [
    stakedBalanceLoading,
    earnedBalanceLoading,
    totalStakedLoading,
    rewardsPerDayLoading,
    apyLoading,
    tokenBalanceLoading,
    tokenAllowanceLoading,
    tokenSymbolLoading,
  ])

  const parseNumber = (value: bigint | undefined, unit = 18) => {
    return value ? Number(value) / 10 ** unit : 0
  }

  return {
    tokenBalance: parseNumber(tokenBalance) ?? 0,
    tokenAllowance: parseNumber(tokenAllowance) ?? 0,
    tokenSymbol,
    stakedBalance: parseNumber(stakedBalance) ?? 0,
    earnedBalance: parseNumber(earnedBalance) ?? 0,
    totalStaked: parseNumber(totalStaked) ?? 0,
    rewardsPerDay: parseNumber(rewardsPerDay) ?? 0,
    apy: parseNumber(apy) ?? 0,
    tier: Number(tier) || 0,
    allTiers: [350, 1500, 10000, 50000],
    isLoading,
  }
}
