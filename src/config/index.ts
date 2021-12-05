import { ChainId } from '@honorswap/testnetsdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

// HNR_PER_BLOCK details
// 40 HNR is minted per block
// 20 HNR per block is sent to Burn pool (A farm just for burning cake)
// 10 HNR per block goes to HNR syrup pool
// 9 HNR per block goes to Yield farms and lottery
// HNR_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// HNR/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const HNR_PER_BLOCK = 40
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const HNR_PER_YEAR = HNR_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = 'https://honorswap.com'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
