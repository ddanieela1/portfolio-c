import { Container, Row, Col, Tab, Nav, TabPane} from "react-bootstrap";


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
        {
            title: "Voluntiers",
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
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>


                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return(
                                                    <h1>   Project here </h1>
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane >
                                <Tab.Pane eventKey="section">
                                    <p>Description here</p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="third">
                                    <p>Description here</p>
                                 </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}