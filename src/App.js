import { AppBar, Toolbar} from '@mui/material';
import { Container } from '@mui/system';

 
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import RegisterForm from './components/Register';
 
function App() {
  return (
    <>
    <AppBar position='inline'><Toolbar>User Form</Toolbar></AppBar>
    <Container>
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   
     
    </Container>
    </>
  );
}
 
export default App;