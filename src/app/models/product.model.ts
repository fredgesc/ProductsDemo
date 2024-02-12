export interface Product {
    id?: number,
    name: string,
    price: number,
    stock: number,
    category: string,
    reviews: {
        score: number, 
        comment: string
    }[]
}