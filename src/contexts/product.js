import { createContext } from "react";

const ProductContext = createContext(undefined);


export default ProductContext;

// 나중에 localStorage.setItem 에 actions를 같이 하면 되지 않을까??
// 그러면 나중에는 결국 상품목록이니까 하나의 배열에 오브젝트 형태로 
// 저장을 해야할건데 localStorage는 문자열 숫자 만 되니까
// JSON쓴다면?? 나중에 실험

// 기본적으로 키밸류가 잇어야 하는 경우 