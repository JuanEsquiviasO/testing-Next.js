import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import css from 'next/css';

function Home() {
	return (
		<section>
			<Head>
				<title>Home</title>
			</Head>
			<h1 className={styles}>
				Hi Next.js!
			</h1>
			<Link href="/about">Go to about</Link>
		</section>			
	);
}

const styles = css({
	color: 'red',
});

export default Home;