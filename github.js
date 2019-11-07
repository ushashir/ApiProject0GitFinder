class Github {
    constructor ( ) {
        this.client_id = '12d1315c98839803043c';
        this.client_secret = '1009290f65b564e2e20e1e55fc99866702726cdb';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}


// git app client detail url
// https://github.com/settings/applications/1164996