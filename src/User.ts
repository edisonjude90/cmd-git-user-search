// import Repo from './Repo';

export default class User {
    userName: string;
    fullName: string;
    location: string;
    repoCount: number;
    followersCount: number;

    constructor(responseBody: any) {
        this.userName = responseBody.login;
        this.fullName = responseBody.name;
        this.location = responseBody.location;
        this.repoCount = responseBody.public_repos;
        this.followersCount = responseBody.followers;
    }
}