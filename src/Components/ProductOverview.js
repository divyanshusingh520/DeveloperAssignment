import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react'

function ProductOverview() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-overview">
      <img style={{width:"200px"}}src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default ProductOverview;
