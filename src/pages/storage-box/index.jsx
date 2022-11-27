import React from "react";
import { Table } from "react-bootstrap";

import Header from "../../components/header";
import useLogic from "./use-logic";

const StorageBoxPage = () => {
  const logic = useLogic();
  const items = logic.items;
//   console.log(items)
  return (
    <div>
      <Header />
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>#</td>
            <td>Product Id</td>
            <td>Product Name</td>
            <td>Count</td>
          </tr>
          {/* {items.map((item, index) => (
            <tr key={item.productId} >
              <td>{index}</td>
              <td>{item.productId}</td>
              <td>product name</td>
              <td>{item.count}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};
export default StorageBoxPage;
