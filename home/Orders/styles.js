import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  overflow: auto;
    min-height: 100vh;
`;

export const ContainerItens = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-top: 25px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 32.81px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: left;
  color: #eeeeee;
  margin-left: 20px;
`;

export const Input = styled.input`
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  color: white;

  background: #ffffff40;

  padding-left: 18px;
  margin-bottom: 50px;

  width: 342px;
  height: 55px;
  border: none;
  outline: none;
  border-radius: 14px;
`;

export const Button = styled.button`
  background: #d93856;
  font-size: 17px;
  font-weight: 900;
  color: #ffffff;
  padding: 18px;
  border: none;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;


export const Order = styled.li`
  /* border-radius: 14px;
    border: none;
    width: 342px;
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px 20px;
    outline: none;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; */


  display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;

  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;

  list-style-type: none; 

  width: 342px;
height: 101px;

padding-left: 18px;
  margin-bottom: 50px;

  
  
  border-radius: 14px;


button{
  display: flex;
  justify-content: end;
  background: none;
  border: none;
  cursor: pointer;
}

div{
display: flex;
color: #ffffff;

    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
}

.clientName{
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

`;

