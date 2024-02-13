export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    id: number;
    productName: string;
    price: number;
    urlImage: string;
    quantity: number;
}
