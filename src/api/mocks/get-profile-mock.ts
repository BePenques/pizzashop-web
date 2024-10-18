import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<
  never, // params
  never, // formato body da requisição
  GetProfileResponse // formato do retorno
>('/me', async () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'teste@teste.com',
    phone: '1948475857',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
