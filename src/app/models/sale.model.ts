export interface Sale {
    id?: string; // ID de la venta
    productId: string; // ID del producto vendido
    quantity: number; // Cantidad vendida
    totalPrice: number; // Precio total de la venta
    timestamp: Date; // Fecha y hora de la venta
  }
  