import React, { Component } from 'react'
import PinterestService from '../services/pinterest-service'


export default class PinterestUserItems extends Component {
	
	state = {
		users: null
	}

	pinterestService = new PinterestService();

	componentDidMount() {
		this.pinterestService
			.getPinterestResource('julia')

	}
	
	render() {


		return (
			<div>
				
			</div>
		)
	}
}
