import BaseBuilder from "./baseBuilder";

class CategoryBuilder extends BaseBuilder {
  constructor() {
    super();
    this.id = 1;
    this.name = "HI WHY YOU ADD THIS IN API WHY";
    this.image = "https://picsum.photos/640/640?r=4763";
    this.creationAt = "2023-06-21T06:37:02.000Z";
    this.updatedAt = "2023-06-21T19:23:41.000Z";
  }
}

export default CategoryBuilder;
