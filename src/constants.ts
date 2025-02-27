import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum ChainId {
  XTERIO_TESTNET = 1637450,
  XTERIO = 112358,
  BNB = 56,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
