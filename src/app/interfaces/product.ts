export interface ProductsResponse {
    ok: boolean;
    allProducts: Product[];
}

export interface ProductResponse {
    ok: boolean;
    Product: Product;
}

export interface Product {
    id: number;
    productName: string;
    price: number;
    description: string;
    urlImage: string;
    quantity: number;
    createAt: string;
}
