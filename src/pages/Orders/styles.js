import styled from "styled-components";

export const OrderContainer = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 25px;
`;

export const OrderTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 50px;
`;

export const OrderButton = styled.button`
  background: #2d2c30;
  font-size: 17px;
  font-weight: 900;
  color: #ffffff;
  padding: 18px;
  margin-top: 40px;
  cursor: pointer;
  width: 342px;
  text-align: center;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Order = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  list-style-type: none;
  margin-bottom: 50px;

  button {
    display: flex;
    justify-content: end;
    background: none;
    border: none;
    cursor: pointer;
}

  div {
    display: flex;
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;   
  }

  .clientName {
    font-size: 18px;
    font-weight: bold;
    color: white;
    width: 350px;
  }
`;
