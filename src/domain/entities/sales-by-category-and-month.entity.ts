export class SalesByCategoryAndMonthEntity {
    constructor(
        public id: string,
        public category: string,
        public month: string,
        public totalsales: number,
    ) { }

    public static objectMapper(object: { [key: string]: any }): SalesByCategoryAndMonthEntity {
        const { id, category, month, totalsales } = object

        return new SalesByCategoryAndMonthEntity(
            id,
            category,
            month,
            totalsales
        )
    }

}