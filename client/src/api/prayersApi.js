class PrayersApi {
    static getAllPrayers() {
        return fetch('http://localhost:3001/api/v1/prayers').then(response => {
            return response.json()
        }).catch(error => {
            return error
        })
    }
}

export default PrayersApi
