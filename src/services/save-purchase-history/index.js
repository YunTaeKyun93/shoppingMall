import useLocalStorageName from "../local-storage-name";
const useSavePurchaseHistory = () => {
  const localStroageName = useLocalStorageName();
  return async (product, user_) => {
    const db = JSON.parse(window.localStorage.getItem(localStroageName));
    const user = db.users.find((currentUser) => currentUser.id === user_.id);

    const price = product.price;
    const point = user.point;
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const purchaseDate = year + "-" + month + "-" + day;

    if (user.purchaseHistory == null) {
      user.purchaseHistory = [];
    }
    user.purchaseHistory.push({
      productName: product.name,
      price: price,
      purchaseDate: new Date(purchaseDate),
      balance: point
    });

    window.localStorage.setItem(localStroageName, JSON.stringify(db)); 
  };
};
export default useSavePurchaseHistory;
