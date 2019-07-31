export default class PinterestService {

	getPinterestResource = async (name) => {

    return fetch(`https://www.pinterest.com/${name}/feed.rss/`)
        .then(response => response.text())
        .then(str => (new DOMParser()).parseFromString(str, "text/xml"))
				.then(data => console.log(data))
				.catch(error => console.log(error))

	}
	
}