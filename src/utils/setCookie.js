//INCOMPLETE, ONLY ABLE TO SET 1 COOKIe

const setCookie = (name, value) =>
{
	document.cookie = `${name}=${value}`
}

module.exports = setCookie