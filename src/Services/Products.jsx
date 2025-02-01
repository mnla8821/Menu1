import { PublicAxios } from "./axiosHandler";

class Products {
  static endPointAllProducts = "/products";

  static getAllProducts() {
    return PublicAxios.get(`${Products.endPointAllProducts}`);
  }
  static getSingleProduct(id) {
    return PublicAxios.get(`${Products.endPointAllProducts}/ ${id}`);
  }
}

export default Products;
