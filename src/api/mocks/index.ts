import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrderAmountMock } from './get-day-orders-amount'
import { getMonthCanceledOrderAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrderAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrderAmountMock,
  getMonthOrderAmountMock,
  getMonthCanceledOrderAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
