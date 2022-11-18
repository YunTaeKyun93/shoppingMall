import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";

import AdminHeader from "./../../../components/AdminHeader";
import useLogic from "./use-logic";

const CreateProductPage = () => {
  const fileInput = useRef(null);
  const logic = useLogic({ fileInput });

  return (
    <div>
      <AdminHeader />
      <Container
        style={{ width: "800px", background: "royalblue" }}
        className="my-5"
      >
        <h3>상품등록</h3>
        <Form className="my-3">
          <Form.Group className="mb-3">
            드로그 앤 드롭으로 해보고 싶음
            <Form.Label>Product Image Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Procut Image Url"
              value={logic.imageUrl}
              onChange={(e) => logic.setImageUrl(e.target.value)}
            />
            <button onClick={(e) => logic.handleBtnClick(e)}>Click</button>
            <input
              type="file"
              ref={fileInput}
              accept="image/*"
              required
              multiple
              onChange={() => logic.handleChange()}
              style={{ display: "none" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Procut Name"
              value={logic.name}
              onChange={(e) => logic.setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Description"
              value={logic.description}
              onChange={(e) => logic.setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              value={logic.price}
              onChange={(e) => logic.setPrice(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="light"
            type="submit"
            className="mb-3"
            onClick={logic.onSubmit}
          >
            상품등록
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateProductPage;
