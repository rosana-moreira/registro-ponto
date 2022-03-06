import styled from 'styled-components';
export const Container = styled.div`
  width: 700px;
  height: 680px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  flex-direction: column;
  border: 3px solid #ccc;
  box-shadow: 1px 2px 5px #46003a;
  align-items: center;
  border-radius: 15px;
  button {
    width: 100%;
    height: 70px;
    padding: 20px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 20px;
    background-color: #e03e36;
    font-weight: bold;
    margin-top: 8px;
    transition: transform 0.7s;
  }
  button:hover {
    transform: scale(1.05);
  }
`;
export const Title = styled.div`
  h1 {
    font-size: 50px;
    color: #384252;
    padding-bottom: 20px;
  }
`;

export const Input = styled.div`
  width: 540px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.15);
  justify-content: center;
  border-radius: 4px;
  border-left: 1px solid #384252;
  border-right: 1px solid #384252;
  border-bottom: 1px solid #384252;
  input {
    width: 100%;
    background: transparent;
    border: 0;
    height: 60px;
    color: #384252;
    outline: none;
    padding-left: 20px;
    font-size: 18px;
  }
  input::placeholder {
    justify-content: center;
    color: #384252;
  }
`;
