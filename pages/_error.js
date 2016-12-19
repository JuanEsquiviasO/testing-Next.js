import React from 'react';
import Head from 'next/head';


class Error extends React.Component {
	static async getInitialProps({ pathname, query, req, xhr }) {
		const request = req || xhr;
		return {
			page: pathname,
		};
	}
	render() {
		return (
			<section>
				<Head>
					<title>Error 404 - {this.props.page} not found</title>
				</Head>
				<h1>
					Error 404
				</h1>
				Page {this.props.page} does not exist
			</section>
		);
	}
}

export default Error;