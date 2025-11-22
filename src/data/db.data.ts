
export interface IProducts {
    id: number;
    name: String;
    price: number
}

export let products_db: IProducts[] = [
    { id: 1, name: 'Arroz Paisana', price: 15.90 },
    { id: 2, name: 'Fideos Don Victorio', price: 5.00 },
]
