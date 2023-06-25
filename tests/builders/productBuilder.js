import BaseBuilder from "./baseBuilder";
import CategoryBuilder from "./categoryBuilder";

class ProductBuilder extends BaseBuilder {
  constructor() {
    super();
    this.id = 311;
    this.title = "Mango";
    this.description = "Rico mango clasico";
    this.images = ["https://placeimg.com/640/480/any"];
    this.creationAt = "2023-06-21T19:35:18.000Z";
    this.updatedAt = "2023-06-21T19:35:18.000Z";
    this.category = new CategoryBuilder().build();
  }
}

export default ProductBuilder;
