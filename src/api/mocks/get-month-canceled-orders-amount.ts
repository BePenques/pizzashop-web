import { http, HttpResponse } from 'msw'

import { GetMounthCanceledOrdersAmountResponse } from '../get-mounth-canceled-orders-amount'

export const getMonthCanceledOrderAmountMock = http.get<
  never, // params
  never, // formato body da requisição
  GetMounthCanceledOrdersAmountResponse // formato do retorno
>('/metrics/month-canceled-orders-amount', async () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  })
})
