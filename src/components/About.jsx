
import { Container,Row,Col } from "react-bootstrap";

export const About = () => {
    return(
        <section>
            <Container id="about">
                <Row className="align-items-center">
                <Col md={6}>
                        <img className="contactImg" src={"/footer-pic.jpg"} alt="contactImg" />

                    </Col>
                    <Col md={6}>
                        
                        <h5 className="contact">
                   

                            Im a Software Engineer based in Florida. Ive always loved putting my problem solving skills to the test
                            and having the ability to bring my vision into life by writing code. Having the capacity to do these things is what
                            makes me passionate about being a developer and constantly learn new skills to improve the quality of my code. 
                            I come from a diverse background, having worked for different types of organizations, I've gained varying perspectives,
                            adaptability and become adept at learning new skills. 
                          
                        </h5>

                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}