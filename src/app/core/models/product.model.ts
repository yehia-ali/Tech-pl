export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    brand: string;
    category: string;
    stock: number;
    rating: number;
    reviews: Review[];
}

interface Review {
    id: number;
    rating: number;
    comment: string;
}
