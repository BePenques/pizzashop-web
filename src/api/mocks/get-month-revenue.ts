import { http, HttpResponse } from 'msw'

import { GetMounthRevenueResponse } from '../get-mounth-revenue'
export const getMonthRevenueMock = http.get<
  never, // params
  never, // formato body da requisição
  GetMounthRevenueResponse // formato do retorno
>('/metrics/month-receipt', async () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})
