import { useState, useEffect } from 'react';

import axios from 'axios';

import Form from './components/Form';
import Grid from './components/Grid';

import GlobalStyle from './styles/global';
import { Container, Title, Image } from './styles/styles';

import imageUsers from './images/users.png';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800");
      setUsers(response.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Image src={imageUsers} width={60} />
        <Title>USUÁRIOS</Title>

        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />

        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />

      <GlobalStyle />
    </>
  );
}

export default App;
