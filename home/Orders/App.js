import React from "react";
import axios from "axios";

import ImgLogo from "";
import Trash from "../Assets/Trash.svg";

import {
  Container,
  ContainerItens,
  Image,
  Title,
  InputLabel,
  Input,
  Button,
  Order,
} from "../styles";

function App() {
  const orders = [
    {
      id: Math.random(),
      order: "Coxinha",
      clientName: "João",
    },
  ];

  //   const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     async function fetchOrders() {
  //       const response = await axios.get("http://localhost:3002/orders");
  // setOrders(response.data);
  //     }
  //     fetchOrders();
  //   }, []);

  return (
    <Container>
      <Image alt="logo-image" src={ImgLogo} />
      <ContainerItens>
        <Title>Faça seu pedido!</Title>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Digite seu pedido"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Nome"></Input>
        <Button>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              

              <div>
                <p> {order.order}</p>{" "} 
                </div>

                <button>
                <img src={Trash} alt="lata-de-lixo" />
              </button>

                <p className="clientName">{order.clientName} </p>
              

              
            </Order>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
