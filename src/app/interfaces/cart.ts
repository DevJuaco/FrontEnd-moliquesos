export interface Cart {
    items: Array<CartItem>
}

export interface CartItem {
    id: number;
    productName: string;
    price: number;
    description: string;
    urlImage: string;
    createAt: string
}
