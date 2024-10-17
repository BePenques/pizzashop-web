import { http, HttpResponse } from 'msw'

import { GetMounthOrdersAmountResponse } from '../get-mounth-orders-amount'

export const getMonthOrderAmountMock = http.get<
  never, // params
  never, // formato body da requisição
  GetMounthOrdersAmountResponse // formato do retorno
>('/metrics/month-orders-amount', async () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
