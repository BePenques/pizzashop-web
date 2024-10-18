import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsResponse,
  OrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  OrderDetailsParams, // params
  never, // formato body da requisição
  GetOrderDetailsResponse // formato do retorno
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234345454545',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 3000,
    orderItems: [
      {
        id: 'ordem-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza peperroni',
        },
      },
      {
        id: 'ordem-item-2',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza 4 queijos',
        },
      },
      {
        id: 'ordem-item-3',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza frango catupiry',
        },
      },
    ],
  })
})
