class InsufficientBalance extends Error {
    constructor (){
        super(`잔액이 부족합니다. `);

    }
}
export default InsufficientBalance;