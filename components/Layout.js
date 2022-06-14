import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, Link } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({title,description, children }) {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>{title ? `${title} | Next E-com`: 'Next E-com'} </title>
				{description && <meta name="description" content={description}></meta>}
			</Head>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<NextLink href="/" passHref>
						<Link>
							<Typography className={classes.brand}>Next E-Com </Typography>
						</Link>
					</NextLink>
					<div className={classes.grow} />
					<div>
						<NextLink href="/cart" passHref>
							<Link>Cart</Link>
						</NextLink>
						<NextLink href="/login" passHref>
							<Link>Login</Link>
						</NextLink>
					</div>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<footer className={classes.footer}>
				<Typography>@All right reserved. Next E-Com 2022.</Typography>
			</footer>
		</div>
	);
}
