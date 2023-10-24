import React, { useContext } from 'react';
import { MyContext } from './Mycontext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

function Cart() {
  const { cart } = useContext(MyContext);

  const cartItems = cart.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = { ...product, quantity: 0 };
    }
    acc[product.id].quantity++;
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <div className="row">
        {Object.values(cartItems).map((item) => (
          <div className="col-md-12 mb-4" key={item.id}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Price: {item.quantity * item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ background: 'blue', color: 'white' }}>
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12 mt-4">
          <Typography variant="h6">
            Total Price: {Object.values(cartItems).reduce((total, item) => total + item.quantity * item.price, 0)}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Cart;
