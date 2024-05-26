// src/OrderList.js
import React, { useState, useEffect } from "react";
import Trash from "../../Assets/Trash.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  OrderContainer,
  OrderTitle,
  OrderButton,
  Order,
} from "./styles";

function Orders() {
const [orders, setOrders] = useState([]);
const navigate = useNavigate();

useEffect(() => {
const fetchOrders = async () => {
  try{
    const response = await axios.get("http://localhost:3002/orders");
setOrders(response.data);
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
  }
};

fetchOrders();
}, []);

const handleDeleteOrder = async (id) => {
  try {
    await axios.delete(`http://localhost:3002/orders/${id}`);
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
  }
};

const handleGoBack = () => {
  navigate("/");
};

  return (
<OrderContainer>
      <img src={require("../../Assets/Order.png")} alt="Logo" />
      <OrderTitle>Pedidos</OrderTitle>
      <ul>
        {orders.map((order) => (
          <Order key={order.id}>
            <div>
              <p> {order.order}</p>
            </div>

            <button onClick={() => handleDeleteOrder(order.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>

            <p className="clientName">{order.clientName} </p>
          </Order>
        ))}
      </ul>
      <OrderButton onClick={handleGoBack}>Voltar</OrderButton>
    </OrderContainer>
  );
}

export default Orders;
