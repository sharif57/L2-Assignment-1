{


    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLocaleLowerCase()
        }
        else {
            return input.toUpperCase()
        }

    }





    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4)
    }

    const books = [
        { title: "Book A", rating: 4 },
        { title: "Book B", rating: 92 },
        { title: "Book C", rating: 5.0 }
    ];

    filterByRating(books);


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = []
        for (const array of arrays) {
            result.push(...array)
        }
        return result;
    }



    class Vehicle {
        private make: string;
        private year: number

        constructor(make: string, year: number) {
            this.make = make,
                this.year = year
        }
        getInfo() {
            return `Make: ${this.make} year: ${this.year}`
        }

    }

    class Car extends Vehicle {
        constructor(make: string, year: number, private model: string) {
            super(make, year)
        }
        getModel() {
            return `Model: ${this.model}`
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");


    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length
        }
        else {
            return value * 2
        }
    }



    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null
        }

        let hightPrice = products[0]
        for (const product of products) {
            if (product.price > hightPrice.price) {
                hightPrice = product
            }
        }
        return hightPrice
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }



    function getDayType(day: Day): string {
        switch (day) {
            case Day.Sunday:
                return 'Weekend';

            default:
                return 'Weekday'
        }
    }



    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject('negative number no allow')
                }
                else {
                    resolve(n * n)
                }
            }, 1000);
        })
    }




    // close 
}