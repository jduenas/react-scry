import axios from 'axios';
import queryString from 'query-string';

const objectToQueryString = (obj: {}, options = {}) => {
    console.log(`Object to QS param: `, obj);
    const result = queryString.stringify(obj, {
        arrayFormat: 'bracket',
        ...options
    });

    console.log(`Object to QS: `, result);
    return result;
};

const defaults = {
    baseURL: process.env.API_URL || 'https://api.scryfall.com',
    headers: () => ({
        'Content-Type': 'application/json'
        // Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
    }),
    error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong. Please check your internet connection or contact our support.',
        status: 503,
        data: {}
    }
};

function dispatch<T>(method: 'GET', url: string, variables: any): Promise<T> {
    const a = new Promise<T>((resolve, reject) => {
        axios({
            url: `${defaults.baseURL}${url}`,
            method: method,
            headers: defaults.headers(),
            params: method === 'GET' ? variables : undefined,
            data: method !== 'GET' ? variables : undefined,
            paramsSerializer: objectToQueryString
        }).then(
            (response) => {
                console.info(`Fetched Data for ${url}`, response.data);
                resolve(response.data);
            },
            (error) => {
                console.error(`Error Fetching Data for ${url}`, error);
                if (error.response) {
                    if (error.response.data.error.code === 'INVALID_TOKEN') {
                        // removeStoredAuthToken();
                        // history.push('/authenticate');
                    } else {
                        reject(error.response.data.error);
                    }
                } else {
                    reject(defaults.error);
                }
            }
        );
    });

    return a;
}

function get<T>(url: string, args?: any) {
    return dispatch<T>('GET', url, args);
}

const restApi = {
    get
};

export default restApi;
