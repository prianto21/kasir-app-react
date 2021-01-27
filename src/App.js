import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import {Hasil,NavbarComponent,ListCategory} from './components';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-2">
        <Container>
          <Row>
            <ListCategory />
            <Col>
              <h4>Daftar Produk</h4>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
