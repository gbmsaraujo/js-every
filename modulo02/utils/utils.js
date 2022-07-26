/**
 *
 * @param {Array} users - Recebe um array de objetos de usuários
 * @param {string} condition - Parâmetro para inserir a condição de filtro
 */
function filterEmail(users, condition) {
	const emailsFiltered = users.filter((user) =>
		user.email.includes(condition)
	);
	console.log(emailsFiltered);
}

module.exports = { filterEmail };
