import { Card, CardActionArea, CardMedia, Grid,CardContent, Typography, CardActions, Button } from '@material-ui/core';
import Layout from '../components/Layout';


import data from '../utils/data';

export default function Home() {
	return (
		<Layout>
			<div>
				<h1>Product</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
									<CardMedia component="img" image={product.image} title={product.title} />
                  <CardContent>
            <Typography >{product.name}</Typography>
                  </CardContent>
								</CardActionArea>
                <CardActions>
                <Typography >  ${product.price}</Typography>
                <Button variant="text" size='small' color="primary">
                  Add to card
                </Button>
                </CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</Layout>
	);
}
