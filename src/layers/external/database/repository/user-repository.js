class UserRepository {
    constructor(User) {
        this.user = User;
    }
    async create({ username, email, password }) {
        return await this.user.create({
            username,
            email,
            password,
        });
    }

    async getUserByEmail(email) {
        const user = await this.user.findOne({ where: { email } });

        if (!user) return null;

        return user;
    }
}

module.exports = UserRepository;
