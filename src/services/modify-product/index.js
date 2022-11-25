import useLocalStorageName from "../local-storage-name";
import useReadProduct from "./../read-product/index";

const useModifyProduct = () => {
  const readProduct = useReadProduct();
  const localStorageName = useLocalStorageName();

  return async (id, payload) => {
    const db = JSON.parse(window.localStorage.getItem(localStorageName));
    const product = await readProduct(id);

    // 기존 product를 업데이트
    if ('name' in payload) {
      product.name = payload.name;
    }

    if ('description' in payload) {
      product.description = payload.description;
    }

    if ('imageUrl' in payload) {
      product.imageUrl = payload.imageUrl;
    }

    if ('price' in payload) {
      product.price = payload.price;
    }

    

    window.localStorage.setItem(localStorageName, JSON.stringify({
      ...db,
      products: db.products.map((currentProduct) => {
        if (currentProduct.id !== id) {
          return currentProduct;
        }

        return product;
      })
    }));
  };


//   return async (id, category) => {
//     const db = JSON.parse(window.localStorage.getItem(localStorageName));
//     const product = await readProduct(id);
//     const newProduct = {...product, ...category};

//     /*
// const obj1 = {
//   id: '1234',
//   name: 'asdf',
//   age: 24,
// };

// const obj2 = {
//   name: undefined,
//   gender: 'male',
//   age: 25,
// };

// const newObj = {...obj1, ...obj2};

// newObj // {}
// newObj // {id: '1234', name: 'asdf', age: 24}
// newObj // {id: '1234', name: undefined,  age: 25, gender: 'male'}


// {
//   id: '1234',
//   name: 'asdf',
//   age: 24,
// }
//     */

//   //   console.log("11", category);
//   //   const getCategoty = () => {
//   //     return Object.entries(category).map(([key, _]) => key);
//   //   };
//   //   const cc = getCategoty();
//   //   const getValue = () => {
//   //     return Object.entries(category).map(([_, value]) => value);
//   //   };
//   //   const ee = getValue();
//   //  console.log(...ee)

//   //   product[cc] = ee;

//     // console.log(product);
//   };
  // // Section 2: localStorage가 변경되었으면 좋겠다.

  // const updateTargetCategory = product.category;
  // const afterUpdate = 1
  // const newDb = {
  //     ...db,
  //     products : afterUpdate
  // }
  // window.localStorage.setItem(localStorageName, JSON.stringify(db))
};
export default useModifyProduct;
