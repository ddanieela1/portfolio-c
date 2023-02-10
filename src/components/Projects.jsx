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
                        <h2>Projects</h2>
                        <p>Description</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>

                            </Nav>
{/* 
                            <Tab.Content id="slideInUp" className="" */}
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}