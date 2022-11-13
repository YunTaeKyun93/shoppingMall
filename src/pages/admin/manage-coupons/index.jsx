import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdminHeader from '../../../components/AdminHeader';
import Coupon from '../../../components/Coupon';

const AdminManageCouponsPage = () => {
    return (
        <div>
            <AdminHeader />
            <Row>
                <Col>
                    <Coupon />
                </Col>
            </Row>

        </div>
    )
};

export default AdminManageCouponsPage;
