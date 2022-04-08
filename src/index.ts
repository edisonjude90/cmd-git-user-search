import GitHubApiServices from './GitHubApiServices';
import User from './User';

function getUserName() {
    let userName: string = '';

    if (process.argv.length <= 2) {
        throw "Enter name="
    } else {
        userName = process.argv[2].split('=')[1];
    }

    return userName;
}

async function start() {
    try {
        const userName = getUserName();

        const gitHubService = new GitHubApiServices();

        const userInfo: User = await gitHubService.getUser(userName);

        console.log(`
            Username  : ${userInfo.userName} \n
            Full Name : ${userInfo.fullName} \n
            Location  : ${userInfo.location} \n
            Repo Count: ${userInfo.repoCount} \n
            Followers Count: ${userInfo.followersCount}
        `);
    } catch (ex) {
        console.log(ex);
    }
}

start();
