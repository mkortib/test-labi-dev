import React, { Component } from 'react'
import PostDataService from '../services/post-data-service'

import './posts.css'

export default class Posts extends Component {
	
	postDataService = new PostDataService();

	state = {
		posts: null
	}

	componentDidMount() {
		this.postDataService
			.getAllData()
			.then((posts) => {
				this.setState({
					posts
				})
			})	
	}

	renderItems(arr) {
		return arr.map((post, index) => {

			const { name, options, description, category, skills, client } = post;  

			const { fixed, budget, delivery, posted, ends, proposals } = options; 

			return (
				<div key={index} className="item">
					
					<h4 className="item_title">
						<a href="/">{name}</a>
					</h4>

					<ul className="item_description_list">
						<li>
							<span className="item_option_label">Fixed:</span> 
							{fixed}
						</li>
						<li>
							<span className="item_option_label">Budget:</span> 
							{budget}
						</li>
						<li>
							<span className="item_option_label">Delivery:</span> 
							{delivery}
						</li>
						<li>
							<span className="item_option_label">Posted:</span> 
							{posted}
						</li>
						<li>
							<span className="item_option_label">Ends:</span> 
							{ends}
						</li>
						<li>
							<a className="item_proposals" href="/">{proposals} Proposals</a>
						</li>
					</ul>

					<div className="item_description">
						{description + '... '} 
						<a href="/">more</a>
					</div>

					<ul className="item_description_list">
						<li>
							<span className="item_option_label">Category:</span>
							{category}
						</li>
						<li className="item_skills">
							<span className="item_option_label">Skills:</span>
							{
								skills.map((skill, index) => {
									const { name } = skill;
									return (
										<div className="item_skill" key={index} >
											{name}
										</div>
									)
								})
							}
							<a href="/">18 more</a>
						</li>
					</ul>

					<ul className="item_description_list item_description2">
						<li>
							<span className="item_option_label">Client:</span>
							{client.country}
							<div className="item_rating">
								<span className="item_rating_number">{client.rating}</span>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
							</div>
						</li>
					</ul>

				</div>
			);
		})
	}

	render() {

		const { posts } = this.state;

		if (!posts)  {
			return <h2>No data yet</h2>
		}

		return (
			<div className="items">
				{ this.renderItems(posts) }
			</div>
		)

	}
}

