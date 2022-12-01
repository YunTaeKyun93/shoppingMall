class ProductNotFoundByIdError extends Error {
    constructor() {
        super(`해당하는 ID를 가진 상품이 없습니다.`);
       
    }
}

export default ProductNotFoundByIdError;
