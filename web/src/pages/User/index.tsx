import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, Input, Title } from './style';

const User: React.FC = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  async function handle() {
    try {
      await api.post('/', {
        num_registration: number,
        name: name,
      });
      alert('Cadastro realizado com sucesso!');
    } catch {
      alert('Ops parece que algo deu errado!');
    }
  }

  return (
    <Container>
      <Title>
        <h1>Cadastro de Usuario</h1>
      </Title>
      <Input>
        <input
          name="name"
          placeholder="Digite seu nome..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Input>
      <Input>
        <input
          name="number"
          placeholder="numero de Registro..."
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Input>

      <Link to="/dashboard">
        <button onClick={handle}> Cadastrar</button>
      </Link>
    </Container>
  );
};

export default User;
