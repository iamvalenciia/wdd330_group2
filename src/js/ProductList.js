
export default class ProductList {

    constructor() {
        this.products = [];
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData();
        // render the list 
    }

    

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }

    getProductList() {
        return this.products;
    }
}