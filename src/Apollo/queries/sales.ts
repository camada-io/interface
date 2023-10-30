import { gql } from '@apollo/client'

export const PROJECTS = gql`
  query SalesQuery(
    $active: Boolean
    $categories: [String]
    $status: [String]
    $sort: [Sort]
    $search: String
    $limit: Int
    $skip: Int
  ) {
    getAllSales(
      active: $active
      categories: $categories
      status: $status
      sort: $sort
      search: $search
      limit: $limit
      skip: $skip
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      sales {
        id
        _id
        bannerImage
        status
        openTime
        closeTime
        closeTime
        releaseTime
        releaseEndTime
        saleAmountUsd
        saleAmountToken
        availableTokens
        saleProgress
        saleId
        tokenAddress
        address
        icon
        tokenName
        description
        tokenSymbol
        whitepaper
        active
        socialLinks
        categories
      }
    }
  }
`
