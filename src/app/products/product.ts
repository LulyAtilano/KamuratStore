export interface IProduct {
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  id: number;
  category: string;
  tags?: string[];
}

export interface IProductResolved {
  product: IProduct;
  error?: any;
}
/*export class Product implements IProduct {

  constructor(public productId: number,
              public productName: string,
              public productCode: string,
              public releaseDate: string,
              public price: number,
              public description: string,
              public starRating: number,
              public imageUrl: string) {
  }

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }
}*/
