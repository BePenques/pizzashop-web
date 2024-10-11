import { api } from '@/lib/axios'

export interface GetMounthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMounthCanceledOrdersAmount() {
  const response = await api.get<GetMounthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
