export default class FetchError extends Error {
	constructor(body) { // body from rest or graphl, todo extract relevant message
		const message = typeof body === 'string' ? body : (body.message || body.errors && body.errors[0] && body.errors[0].message || 'API error');
		super(message);
	}
}
