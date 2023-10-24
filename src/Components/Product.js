import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MyContext } from './Mycontext';
import { useContext } from 'react';
import { Link } from "react-router-dom"

function Product() {
  const { cart, setCart, product, setProduct, searchQuery } = useContext(MyContext);

  const CartCollection = (data) => {
    console.log("hello")
    setCart([...cart, data]);
  }

  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {searchQuery // Check if a search query is provided
          ? filteredProducts.map((data) => (
            <div className="col-md-4 mb-4" key={data.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {data.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => CartCollection(data)} size="small" color="primary" style={{ background: "blue", color: "white" }}>
                      Add to cart
                    </Button>
                    <Link to={`/product/${data.id}`}>
                      <Button size="small" color="primary" style={{ background: "blue", color: "white", marginLeft: "10px" }}>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))
          : product.map((data) => (
            <div className="col-md-4 mb-4" key={data.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.image}
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography gutterbottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {data.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => CartCollection(data)} size="small" color="primary" style={{ background: "blue", color: "white" }}>
                      Add to cart
                    </Button>
                    <Link to={`/product/${data.id}`}>
                      <Button size="small" color="primary" style={{ background: "blue", color: "white", marginLeft: "10px" }}>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Product;
