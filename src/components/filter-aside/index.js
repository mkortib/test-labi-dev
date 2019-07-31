import React, { Component } from 'react'

import './filter-aside.css'


export default class FilterAside extends Component {
	

	render() {

		return (
			<form name="filters" className="filters">

				<div className="form-group">
					<label htmlFor="categorySelect" className="form_caption">Chose Category</label>
					<select className="form-control" id="categorySelect">
						<option>Best Match</option>
						<option>Search Engine</option>
						<option>Category 3</option>
						<option>Category 4</option>
						<option>Category 5</option>
					</select>
				</div>

				<div className="form-group">
					<label className="form_caption">Chose Subcategory</label>
					<label className="container_checkbox">All Subcategories
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Data Entry (1 306)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Personal Assistant (1 907)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Web Research (972)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Email Response Handling (80)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Transcription (307)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Other - Administrative support
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
				</div>

				<div className="form-group client_rating">
					<label className="form_caption">Client Rating</label>
					<label className="container_radio">Any stars
						<input type="radio" name="radio" />
						<span className="checkmark"></span>
					</label>
					<label className="container_radio">5 stars (930)
						<input type="radio" name="radio" />
						<span className="checkmark"></span>
					</label>
					<label className="container_radio">4.5 stars and Up (2 591)
						<input type="radio" name="radio" />
						<span className="checkmark"></span>
					</label>
					<label className="container_radio">4 stars and Up (1 546)
						<input type="radio" name="radio" />
						<span className="checkmark"></span>
					</label>
					<label className="container_checkbox">Include unrated freelancers (1 784)
						<input type="checkbox"/>
						<span className="checkmark"></span>
					</label>
				</div>
				
				<div className="form-group">
					<label htmlFor="budgetSelect" className="form_caption">Budget</label>
					<select className="form-control" id="budgetSelect">
						<option>Any budjet</option>
						<option>from 500</option>
						<option>500 - 1000</option>
						<option>1000 - 1500</option>
						<option>above 1500</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="deliverySelect" className="form_caption">Delivery</label>
					<select className="form-control" id="deliverySelect">
						<option>Any...</option>
						<option></option>
						<option>Delivery option 1</option>
						<option>Delivery option 2</option>
						<option>Delivery option 3</option>
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="locationSelect" className="form_caption">Location</label>
					<select className="form-control" id="locationSelect">
						<option>Any Location</option>
						<option>City 1</option>
						<option>City 2</option>
						<option>City 3</option>
					</select>
				</div>

			</form>
		)
	}
}

