type ProductProps = {
  productInfo: {
    id: number,
    title: string,
    description?: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    image: string
  }
};

function Product({ productInfo }: ProductProps) {
  return (
    <>
      {
        (productInfo.map((product: typeof productInfo) => (

          <li key={ product.id } className="productList">
            {product.title}
            {' '}

            {product.price}
            <img src={ product.image } alt={ product.title } />
          </li>
        )))
      }
  </>);
}
export default Product;
