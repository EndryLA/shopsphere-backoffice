import {ProductInventory} from "./product-inventory.interface";

class productCategory {
}

export interface Product {
  id:number,
  name:String,
  description:String,
  mainSpecs:String,
  price:number,
  productCategory:productCategory,
  inventory:ProductInventory,
  averageRating:number,
  totalReviews?:number
}
