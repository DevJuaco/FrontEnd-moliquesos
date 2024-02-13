export interface ProductsResponse {
    ok: boolean;
    allProducts: Product[];
}

export interface Product {
    id: number;
    productName: string;
    price: number;
    description: string;
    urlImage: string;
    createAt: string
}
