import useLocalStorageName from '../local-storage-name';

const useCreateProduct = () => {
  const localStorageName = useLocalStorageName();

  return ({ name, description, imageUrl, price, issueDate }) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const serialNum = Math.random().toString(36).substring(2, 12);

    db.products.push({
      id: serialNum,
      name,
      description,
      imageUrl,
      price,
      issueDate
    });
    window.localStorage.setItem(localStorageName, JSON.stringify(db));
  };
};
export default useCreateProduct;
