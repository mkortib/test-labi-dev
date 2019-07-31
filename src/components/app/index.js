import React, { Component } from 'react'
import Posts from '../posts'
import FilterAside from '../filter-aside'
// import PinterestUserItems from '../pinterest-user-items'

import './app.css'

export default class App extends Component {



	render() {

		return (
			<div className="container">

				<div className="row no-gutters">
		
					<div className="col-md-5 col-lg-4 d-none d-md-block">
					
						<FilterAside />

					</div>

					<div className="col-12 col-md-7 col-lg-8">

						<Posts />

					</div>

					<div className="col-md-12">

						{/* <PinterestUserItems /> */}

					</div>

				</div>

			</div>
		)
	}
}
