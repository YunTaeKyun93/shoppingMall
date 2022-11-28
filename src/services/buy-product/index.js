import useAuth from "../auth";
import useReadUser from "../read-user";
import useReadProduct from "../read-product";
import useLocalStorageName from "./../local-storage-name";
// Input: productId, userId
// Output(or Side Effect):
// const createIssueDate = () => {
//   const today = new Date();
//   let year = today.getFullYear();
//   let month = today.getMonth() + 1;
//   let day = today.getDate();
//   const purchaseDate = year + "-" + month + "-" + day;
//   return purchaseDate;
// };
const useBuyProduct = () => {
  const auth = useAuth();
  const localStroageName = useLocalStorageName();
  const readUser = useReadUser();
  const readProduct = useReadProduct();
  return async (productId) => {
    const userId = auth.loggedInUserId;

    // const user = await readUser(userId);
    // const product = await readProduct(productId);
    const db = JSON.parse(window.localStorage.getItem(localStroageName));
    const createIssueDate = () => {
      const today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      const purchaseDate = year + "-" + month + "-" + day;
      return purchaseDate;
    };
    console.log("userId", userId);
    console.log(db.users);
    // const user = await readUser(userId);
    // const product = await readProduct(productId);
    const user = db.users.find((currentUser) => currentUser.id === userId);
    const product = db.products.find((product) => product.id === productId);
    // user.items = [];

    console.log("userId", userId);
    console.log(db.users);

    const user = db.users.find((currentUser) => currentUser.id === userId);
    const product = db.products.find((product) => product.id === productId);

    console.log(product);
    // 좋은 코드 아님(좋은 코드: 유저를 만들 때 point를 생성하는 것)
    // 문제: 이전에 만들었던 유저들
    if (user.point == null) {
      user.point = 0;
    }
    if (user.point < product.price) {
      throw new Error("보유 잔액이 부족합니다.");
    }
    user.point -= product.price;

    if (user.items == null) {
      user.items = [];
    }

    if (!user.items.some((item) => item.productId === productId)) {
      user.items.push({
        productId,

        count: 0,
        // purchaseDate: purchaseDate(),
        productName: product.name,
        price: product.price
      });
    }

    const currentItem = user.items.find((item) => item.productId === productId);
    currentItem.count++;
    window.localStorage.setItem(localStroageName, JSON.stringify(db));

    /*
    const newUser = {
      id: uuid(),
      name,
      age,
    };

    const dbWithNewUser = {
      ...db,
      users: [...db.users, newUser],
    };
    */
    // user.point -= product.price;

    // const newUser ={
    //  ...db,

    //   items:[]
    // }
    // console.log(newUser);

    // if(!newUser.items.some((item)=>item.productId === productId)){
    //   newUser.items.push({productId, count:0});
    // };

    // const currentItem  = newUser.items.find(item=>item.productId == productId);
    // console.log(currentItem);
    // currentItem.count++;

    // window.localStorage.setItem(localStroageName,JSON.stringify(newUser));
    // if (!user.items.some((item) => item.productId === productId)) {
    //   newUser.items.push({ productId, count: 0 });
    // }

    // const currentItem = newUser.items.find((item) => item.productId);
    // currentItem.count++;
    // db.users.push({
    //   items: { productId, count: 0 }
    // });

    //만약 유저가 보유하고있는 포인트 값이 가격보다 낮다면 포인트잔액이 부족합니다 등등 에러 출력
    // 해당하는 가격만큼 유저 포인트가 차감이되고
    // db.users의 새로운 key값 items에 해당 물품의 아이디 와 수량을 추가 해준다

    // console.log(user)
    // {
    //   if (user.items.some((item) => item.productId === productId)) {
    //     const currentItem = user.items.find((item) => item.productId);
    //     currentItem.count++;
    //   } else {
    //     user.items.push({ productId, count: 1 });
    //   }
    // }

    // 무언가
    //id: "3ceaf917-276b-416a-98e7-cb340e587c72", email: "123@123", name: "123", password: "123",…}

    //sideEffect db에 최종적으로 각각의 원하는결과 값을 저장
  };
};

export default useBuyProduct;
