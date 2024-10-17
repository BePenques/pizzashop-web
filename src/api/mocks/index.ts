import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { SignInMock } from './sign-in-mocke'

export const worker = setupWorker(SignInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
