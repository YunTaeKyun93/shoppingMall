class UserNotFoundByEmailError extends Error {
    constructor(email) {
        super(`해당하는 이메일을 가진 유저를 찾을 수 없음: ${email}`);
        this.email = email;
    }
}

export default UserNotFoundByEmailError;
