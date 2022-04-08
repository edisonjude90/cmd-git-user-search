import RestClient from './RestClient';
import User from './User';

const gitHubApiUrl = 'https://api.github.com';

export default class GitHubApiServices extends RestClient {
    async getUser(userName: string) {
        try {
            const response: any = await this.getRequest(`${gitHubApiUrl}/users/${userName}`);

            if (response.message !== 'Not Found') {
                const user = new User(response);

                return user;
            }

            throw `Unable to Get Details for user : ${userName}`;

        } catch (ex) {
            throw `Unable to Get Details for user : ${userName}`;
        }
    }
}