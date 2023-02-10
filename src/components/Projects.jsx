import { Container, Row, Col, Tab, Nav} from "react-bootstrap";


export const Projects = () => {
    const projects = [
        {
            title: "Robot Invasion",
            description: "Gaming",
            imgURL:"",
        },
        {
            title: "My Private Journal",
            description: "Journaling app",
            imgURL:"",
        },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}