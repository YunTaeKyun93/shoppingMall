import useLocalStorageName from "../local-storage-name";

const useReadProduct = () => {
    const localStorageName = useLocalStorageName();

    return async (id) => {
        const db = JSON.parse(window.localStorage.getItem(localStorageName));

        const result = db.products.find((currentProduct) => currentProduct.id === id);

        if (result == null) {
            throw new Error('쿠폰을 id로 찾을 수 없습니다.');
        }

        // result.issueDate = new Date(result.issueDate);
        // result.usedDate = new Date(result.usedDate);

        return result;
    };
};

export default useReadProduct;

        // product.issueDate = new Date(product.issueDate);
