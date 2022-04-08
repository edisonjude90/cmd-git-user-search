"use strict";
// import Repo from './Repo';
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(responseBody) {
        this.userName = responseBody.login;
        this.fullName = responseBody.name;
        this.location = responseBody.location;
        this.repoCount = responseBody.public_repos;
        this.followersCount = responseBody.followers;
    }
    return User;
}());
exports.default = User;
