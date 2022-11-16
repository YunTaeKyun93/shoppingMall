const storageName = "db";

const useCreateProduct = () => {
  return ({ name, description, imageUrl, price, issueDate }) => {
    const db = JSON.parse(window.localStorage.getItem(storageName));
    const serialNum = Math.random().toString(36).substring(2, 12);

    db.products.push({
      id: serialNum,
      name,
      description,
      imageUrl,
      price,
      issueDate
    });
    window.localStorage.setItem(storageName, JSON.stringify(db));
  };
};
export default useCreateProduct;
