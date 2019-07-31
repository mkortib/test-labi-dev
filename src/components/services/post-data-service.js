export default class PostDataService {

  _jobsData = `{
		"posts": [
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			},
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			},
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			},
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			},
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			},
			{
				"name": "SEO Review and Reccomendations",
				"options": {
						"fixed": "Regular",
						"budget": 300,
						"delivery": "Urgent",
						"posted": "12 minutes ago",
						"ends": "14d, 23h",
						"proposals": 0
					},
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
				"category": "Search Engine",
				"skills": [
					{
						"id":1,
						"name": "net-framework"
					},
					{
						"id":2,
						"name": "рhp"
					}
				],
				"client": {
					"country": "United states",
					"rating": 4.8
				}
			}
		]
		}`

		getAllData = async () => {
			return Promise.resolve(this._jobsData)
				.then(JSON.parse)
				.then((item) => item.posts)
				.catch(console.error);
		};

		getSingleInfo = async (id) => {
			return Promise.resolve(this._jobsData)
			.then(JSON.parse)
			.then((item) => item.posts[id])
			.catch(console.error);
		};

}