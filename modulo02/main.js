const { filterEmail } = require("./utils/utils");

const filterEmailAPI = () => {
	return fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => res.json())
		.then((data) => filterEmail(data, ".biz"))
		.catch((err) => console.log(err));
};

filterEmailAPI();
