class IncorrectPasswordError extends Error {
    constructor({password}) {
        super(`비밀번호가 일치하지 않습니다. 입력한 비밀번호: ${password}`);
        this.password = password;
    }
}

export default IncorrectPasswordError;