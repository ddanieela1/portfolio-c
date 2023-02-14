import {Container, Row, Col} from "react-bootstrap";


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
           
            <Col size={12} sm={6}>
              <img src={'/vite.svg'} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={'/linked-in.svg'} alt="Icon" /></a>
                <a href="#"><img src={'/github.svg'} alt="Icon" /></a>

              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}    