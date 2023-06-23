import BaseBuilder from "./baseBuilder";
import CategoryBuilder from "./categoryBuilder";

class ProductPostBuilder extends BaseBuilder {
  constructor() {
    super();
    this.title = 'New Product';
    this.price = 10;
    this.description = 'A description';
    this.categoryId = 1;
    this.images = [
        "https://placeimg.com/640/480/any"
    ]
  }
}

export default ProductPostBuilder;
