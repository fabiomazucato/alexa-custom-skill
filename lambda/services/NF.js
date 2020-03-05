const axiosInstance = require('./AxiosInstance')

const getNF = async () => {
	try {
		const response = await axiosInstance.get('/5e5fef60330000690097b71e')

		return response
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	getNF
}
