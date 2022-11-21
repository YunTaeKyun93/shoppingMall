import useLocalStorageName from "../local-storage-name";

const useReadProduct = () => {
    const localStorageName = useLocalStorageName();

    return async (id) => {
        const db = JSON.parse(localStorage.getItem(localStorageName));
        
        const products = db.products;

        const product = products.find((currentProduct) => currentProduct.id === id);

        if (product == null) {
            throw new Error('Product를 찾을 수 없습니다.'); // TODO 별도 예외 객체로 분리할 것
        }

        return product;
    };
};

export default useReadProduct;
