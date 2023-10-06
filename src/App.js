import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';    //importing 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
             <Navbar bg="dark" data-bs-theme="dark">   {/*adds a NavBar dark theme */}
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>     {/*you can change the page name */}
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>    {/*Route allow you to access another page basically */}
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='create' element={<Footer></Footer>}></Route>
        <Route path='read' element={<Header></Header>}></Route>
        
      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
