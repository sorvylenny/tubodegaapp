
export interface Product {
  id:          string;
  title:       string;
  price:       number;
  description: string;
  slug?:        string;
  stock?:       number;
  sizes?:       Size[];
  gender?:      Gender;
  tags?:        Tag[];
  images:      string[];
}

export enum Gender {
  Kid = "kid",
  Men = "men",
  Unisex = "unisex",
  Women = "women",
}

export enum Size {
  L = "L",
  M = "M",
  S = "S",
  Xl = "XL",
  Xs = "XS",
  Xxl = "XXL",
}

export enum Tag {
  Hats = "hats",
  Hoodie = "hoodie",
  Jacket = "jacket",
  Shirt = "shirt",
  Sweatshirt = "sweatshirt",
}



export interface Icon{
  icon: string;
}
