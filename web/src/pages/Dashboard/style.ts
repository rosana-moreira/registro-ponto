import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 800px;
  border-radius: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 3px solid #ccc;
  align-items: center;
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
  span {
    font-size: 14px;
    color: #384252;
    padding-bottom: 50px;
  }
`;
export const Title = styled.div`
  h1 {
    font-size: 30px;
    color: #384252;
    padding-bottom: 10px;
  }
`;

export const Input = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.15);
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #384252;

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
