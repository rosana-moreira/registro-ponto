import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './style';

const TotalHours: React.FC = () => {
  const [total, setTotal] = useState([]);

  useEffect(() => {
    api.get('/dashboard/total').then(response => {
      setTotal(response.data);
    });
  }, [total]);

  return (
    <Container>
      <h1>{total}</h1>
    </Container>
  );
};
export default TotalHours;
