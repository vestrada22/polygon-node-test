export class ProductsSalesDto {
    private constructor(
        public category: string,
        public month: string,
        public totalSales: number,
    ) { }

    static create(props: { [key: string]: any }): [string?, ProductsSalesDto?] {
        const { category, month, totalSales } = props

        return [
            undefined,
            new ProductsSalesDto(category, month, totalSales)]
    }
}