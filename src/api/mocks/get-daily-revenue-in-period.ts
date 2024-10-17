import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never, // params
  never, // formato body da requisição
  GetDailyRevenueInPeriodResponse // formato do retorno
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 3000 },
    { date: '03/01/2024', receipt: 1000 },
    { date: '04/01/2024', receipt: 5000 },
    { date: '05/01/2024', receipt: 3000 },
  ])
})
