import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amout'

export const getDayOrderAmountMock = http.get<
  never, // params
  never, // formato body da requisição
  GetDayOrdersAmountResponse // formato do retorno
>('/metrics/day-orders-amount', async () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
