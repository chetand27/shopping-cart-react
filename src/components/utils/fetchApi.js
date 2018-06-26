import FetchError from './FetchError';

export const delay = (t, v) => new Promise(r => setTimeout(r, t, v));

const delayError = t => delay(t).then(() => {
	throw new FetchError('Timeout');
});

export const fetchHeaders = (endpoint, { body, headers, ...rest } = {}) => fetch(`http://localhost:3000${endpoint}`, {
	headers: {
		// Authorization: `Bearer ${localStorage.dominodeToken || ''}`,
		Accept: 'application/json',
		...(body ? { 'Content-Type': 'application/json' } : undefined),
		...headers,
	},
	...rest,
	...(body && typeof body === 'object' ? { body: JSON.stringify(body) } : undefined),
});

const toJson = r => r.json()
	.catch(() => r.text())
	.then(body => {
		if (r.ok) {
			return body;
		}
		const error = {
			message: body.msg,
		};
		throw error;
		// return Promise.reject(new FetchError(body));
	});

export const fetchApi = (endpoint, opts) => fetchHeaders(endpoint, opts).then(toJson);

