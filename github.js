class Github {
    constructor() {
        this.client_id = '09793f84b7d7e0e62af6';
        this.client_secret = '9660e988da8b691a29a58f80cf6aabc471445478';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}