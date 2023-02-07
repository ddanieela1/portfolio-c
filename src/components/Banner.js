import {Container,Row} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
// import headerimg from "./public/header"
// come back to add

export const Banner = () => {
    return (
        <section className ="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi I'm webdecoded`}<span className="wrap"></span></h1>
                <p>Dummy Text</p>
                <button onClick={() =>console.log("connect")}>Lets Connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={} alt="Header Img" />

                </Col>
            </Row>
        </Container>

        </section>
    )
}

