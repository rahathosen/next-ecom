import React from 'react';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { Grid, Link,List, ListItem, Typography,Card, Button } from '@material-ui/core';
import useStyles from '../../utils/styles';
import Image from 'next/image';
// import { ArrowLeftIcon, ThreeDRotation } from '@mui/icons-material';
export default function ProductScreen() {
	const classes = useStyles();
	const router = useRouter();
	const { slug } = router.query;
	const product = data.products.find((a) => a.slug === slug);
	if (!product) {
		return (
			<Layout>
				<div>Product not found</div>
			</Layout>
		);
	}

	return (
		<Layout title={product.name}>
			<div className={classes.section}>
				<NextLink href="/" passHref>
					<Link><Typography>Back To Product</Typography></Link>
				</NextLink>
			</div>
            
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<Image src={product.image} 
                    alt={product.name} 
                    width={440} 
                    height={440} 
                    layout="responsive" />
				</Grid>
                <Grid item md={3} xs={12}>
                <List>
                    <ListItem> <Typography component='h1' > {product.name}</Typography> </ListItem>
                    <ListItem> <Typography > Category: {product.category}</Typography> </ListItem>
                    <ListItem><Typography> Brand: {product.brand}</Typography> </ListItem>
                    <ListItem><Typography> Rating: {product.rating} starts ({product.numReviews} review)</Typography> </ListItem>
                    <ListItem><Typography>Description:  {product.description} </Typography> </ListItem>
                </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                <Grid item xs={6}> <Typography >Price </Typography></Grid>
                                <Grid item xs={6}> <Typography> ${product.price}</Typography></Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                <Grid item xs={6}> <Typography >Status </Typography></Grid>
                                <Grid item xs={6}> <Typography> {product.countInStock > 0? `In Stokc`: `Unavialable`}</Typography></Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth  variant="contained" color="primary">
                                  Add to cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
			</Grid>
		</Layout>
	);
}
