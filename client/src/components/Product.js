import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";

function Product(props) {
  const { product } = props;
  return (
    <Card key={product.slug} className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className="product-item">
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text> Ugx:{product.price}</Card.Text>
      </Card.Body>
      <Button className="button ">Add to cart</Button>
    </Card>
  );
}
export default Product;
