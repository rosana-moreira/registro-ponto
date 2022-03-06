import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './style';

const DataUser: React.FC = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    async function getName() {
      api.get('/').then(response => {
        setName(response.data);
      });
    }
    getName();
  }, [name]);

  return (
    <Container>
      <h1> {name}, Seja bem vindo/a!</h1>
    </Container>
  );
};
export default DataUser;
