class DuplicatedIdError extends Error {
    constructor({id}) {
        super(`중복된 아이디가 있습니다. 입력한 아이디: ${id}`);
        this.id = id;
    }
}

export default DuplicatedIdError;