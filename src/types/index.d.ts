export interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface ILoginResponse {
  success: boolean;
  token: string;
  user: IUser | null;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  photo: string;
  created_at: string;
  updated_at: string;
}

export interface ICategory {
  id: string;
  slug: string;
  name: string;
  thumbnail: string;
}

export interface IProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface IProductReviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProduct {
  id: string;
  _id: string;
  title: string;
  sku: string;
  weight: number;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: int = None;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  dimensions: IProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IProductReviews[ProductReviews];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IProductMeta;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  status: "todo" | "inProgress" | "done";
  dueDate: Date | null;
  projectId: string;
  assigneeId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWishlist {
  id: string;
  user_id: string;
  product_id: string;
  created_at: Date;
  updated_at: Date;
  product: IProduct;
}


