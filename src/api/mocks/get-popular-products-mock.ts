import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never, // params
  never, // formato body da requisição
  GetPopularProductsResponse // formato do retorno
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 4 },
    { product: 'Pizza 2', amount: 3 },
    { product: 'Pizza 3', amount: 6 },
    { product: 'Pizza 4', amount: 7 },
    { product: 'Pizza 5', amount: 8 },
  ])
})
