import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ImgLogo from "../../Assets/ImgLogo.png";

import {
  Container,
  ContainerItens,
  Image,
  Title,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [order, setOrder] = useState("");
  const [clientName, setClientName] = useState("");
  const navigate = useNavigate();

  async function handleNewOrder() {
    const newOrder = {
      order,
      clientName,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/orders`, newOrder);
      navigate("/orders");
    } catch (error) {
      console.error("Erro ao criar novo pedido:", error);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNewOrder();
    }
  }

  return (
    <Container>
      <Image alt="logo-image" src={ImgLogo} />
      <ContainerItens>
        <Title>Faça seu pedido!</Title>

        <InputLabel>Pedido</InputLabel>
        <Input
          placeholder="Digite seu pedido"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          onKeyDown={handleKeyDown}
        ></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input
          placeholder="Nome"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          onKeyDown={handleKeyDown}
        ></Input>
        <Button onClick={handleNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>
  );
}

export default App;
