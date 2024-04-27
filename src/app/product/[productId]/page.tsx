interface ProductParams{
  productId?: string;
}

const ProductId = ({params}: {params: ProductParams}) => {
  console.log('params', params)
  return(
    <div>
      <h1>Product ID</h1>
    </div>
  )
}

export default ProductId;