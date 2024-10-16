import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NaviLink', () => {
  it('should highlight the nav link whern is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          /* necessario usar esse wrapper para componentes que dependem de um provider */
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          ) /* a rota ativa é salva em memoria, não fica salva na url como no createBrowserRouter */
        },
      },
    )

    // wrapper.debug()
    /* data-set é a forma de buscar atributos do tipo data */

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})
