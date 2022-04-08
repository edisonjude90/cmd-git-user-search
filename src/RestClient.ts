import * as request from 'request';

export default class RestClient {
    getRequest(url: string) {
        const options: any = {
            headers: {
                'User-Agent': 'GitHub-Test-Project',
            },
            json: true,
        };

        return new Promise((resolve, reject) => {
            request.get(url, options, (error, response, body) => {
                if (error) {
                    reject(error);
                }

                resolve(body);
            });
        });
    }
}