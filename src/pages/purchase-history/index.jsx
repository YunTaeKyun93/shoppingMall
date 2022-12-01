import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Table } from "react-bootstrap";

import useLogic from "./use-logic";
import Header from "../../components/header";
const PurchaseHistoryPage = () => {
  const logic = useLogic();
  if (logic.isLoading) {
    return <ClipLoader color="red" loading={logic.isLoading} size={150} />;
  }
  const purchaseHistory = logic.purchaseHistory;

  return (
    <div>
      <Header />
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>#</td>
            <td>Product Name</td>
            <td>Product price</td>
            <td>Purchase Date</td>
            <td>User Balance</td>
          </tr>
          {purchaseHistory.map((item, index) => (
            <tr key={item.productName}>
              <td>{index}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.balance}</td>

            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PurchaseHistoryPage;
