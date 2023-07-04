type ProductProps = {
  productInfo: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
};

function Product({ productInfo }: ProductProps) {
  const { id, title, price, image } = productInfo;
  return (
    <li key={ id } className="productList">
      <p>{`${title}`}</p>
      {' '}
      <p>{price}</p>
      <img src={ image } alt={ title } />
    </li>
  );
}
export default Product;
