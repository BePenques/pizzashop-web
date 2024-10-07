import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { cancelOrder } from '@/api/cancel-order'
import { getOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export interface orderTableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: orderTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const queryClient = useQueryClient()

  const { mutateAsync: cancelOrderFn } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      const ordersListCache = queryClient.getQueriesData<getOrdersResponse>({
        /* queries - plural pq são varias queries - orders.tsx linha 32 */
        queryKey: ['orders'],
      })

      ordersListCache.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) {
          return
        }

        queryClient.setQueryData<getOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData?.orders.map((order) => {
            if (order.orderId === orderId) {
              return { ...order, status: 'canceled' }
            }
            return order
          }),
        })
      })
    },
    /* Percorre todas as listas de pedidos carregadas,
     que estão no cache, sejam filtradas/paginadas, 
     e quando achar o pedido com mesmo ID, vai trocar o status para cancelado - experiencia veloz para o usuario */
  })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              {/* sr-only - apenas visivel para o leitor de tela */}
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails open={isDetailsOpen} orderId={order?.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order?.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order?.status} />
      </TableCell>
      <TableCell className="font-medium">{order?.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order?.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h3 -w-3 mr-´2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => cancelOrderFn({ orderId: order?.orderId })}
          disabled={!['pending', 'processing'].includes(order.status)}
          variant="ghost"
          size="xs"
        >
          <X className="h3 -w-3 mr-´2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
