class PrayersApi {
	static getAllPrayers() {
		return fetch('api/v1/prayers').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		})
	}

	static createPrayer(prayer) {
		const request = new Request('api/v1/prayers', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify({prayer: prayer})
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		})
	}
}

export default PrayersApi;
