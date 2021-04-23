import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { projection } from '../Function/secondaryFunction';
import { totalPriceItems } from '../Function/secondaryFunction';
import { formatCurrency } from '../Function/secondaryFunction';

const Modal = styled.div`
background-color: white;
width: 600px;
padding: 30px
`;

const Text = styled.h3`
text-align: center;
margin-bottom: 30px;
`;

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
                arr => arr.length ? arr : 'no topping'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentication) => {
    // console.log(orders);
    //заказ с выбранными ключами
    const newOrder = orders.map(projection(rulesData));
    // console.log(newOrder);
    //добавление в базу
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    })
}



export const OrderConfirm = ({
    orders, 
    setOrders,
    authentication,
    setOpenOrderConfirm,
    firebaseDatabase
}) => {
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result, 0);
    const closeModal = e => {
        if (e.target.id === 'overlay'){
            setOpenOrderConfirm(null);
        }
    }
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout
                onClick={() => {
                    sendOrder(dataBase, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonCheckout>

            </Modal>

        </Overlay>
    )
}

