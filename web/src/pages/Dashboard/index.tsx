import React, { useState } from 'react';

import api from '../../services/api';
import TotalHours from '../../componets/TotalHours';
import DataUser from '../../componets/DataUser';
import { Link } from 'react-router-dom';
import { Container, Input, Title } from './style';

const Dashboard: React.FC = () => {
  const [hours, setHours] = useState('');
  const [minute, setMinute] = useState('');
  const [hoursExit, setHoursExit] = useState('');
  const [minuteExit, setMinuteExit] = useState('');

  async function handle() {
    try {
      await api.post('/dashboard/entry', {
        hour: hours,
        minute: minute,
      });
      alert('Entrada Registrada com Sucesso!');
    } catch {
      alert('Ops parece que algo deu errado!');
    }
  }
  async function handleExit() {
    try {
      await api.post('/dashboard/exit', {
        hour: hoursExit,
        minute: minuteExit,
      });

      alert('Saída Registrada com Sucesso!');
    } catch {
      alert('Ops parece que algo deu errado!');
    }
  }
  return (
    <Container>
      <DataUser />

      <Title>
        <h1> Horário de Entrada </h1>
      </Title>

      <Input>
        <input
          type={'number'}
          placeholder=" Digite a Hora..."
          value={hours}
          onChange={e => setHours(e.target.value)}
        />
      </Input>
      <Input>
        <input
          type={'number'}
          placeholder="Digite os Minutos..."
          value={minute}
          onChange={e => setMinute(e.target.value)}
        />
      </Input>
      <Link to="/dashboard">
        <button onClick={handle}> Registrar</button>
      </Link>
      <Title>
        <h1> Horário de Saída </h1>
      </Title>

      <Input>
        <input
          type={'number'}
          placeholder="Digite a Hora..."
          value={hoursExit}
          onChange={e => setHoursExit(e.target.value)}
        />
      </Input>
      <Input>
        <input
          type={'number'}
          placeholder="Digite os Minutos..."
          value={minuteExit}
          onChange={e => setMinuteExit(e.target.value)}
        />
      </Input>
      <Link to="/dashboard">
        <button onClick={handleExit}> Registrar</button>
      </Link>

      <TotalHours />
    </Container>
  );
};

export default Dashboard;
