import { IProduct, IProductDto } from "../types/product";

export function mapProduct(product: IProductDto): IProduct {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = product;

  return {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  };
}