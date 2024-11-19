export interface Product {
    id?: string; // ID del producto (opcional al crear)
    name: string; // Nombre del producto
    price: number; // Precio del producto
    category: string; // Categoría del producto
    storeId: string; // ID de la tienda a la que pertenece
    imageUrl?: string; // URL de la imagen del producto (opcional)
  }
  