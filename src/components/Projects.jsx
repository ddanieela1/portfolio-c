import { Container, Row, Col, Tab, Nav, TabPane} from "react-bootstrap";
import { ProjectDetail } from "./ProjectDetail";


export const Projects = () => {
    const projects = [
        {
            title: "Robot Invasion",
            description: "Gaming",
            imgURL:"/proj1.png",
            repository: "https://github.com/ddanieela1/Robot-Invasion-Game",
         
        },
        {
            title: "My Private Journal",
            description: "Journaling app",
            imgURL:"/proj2.png",
            repository: "https://github.com/ddanieela1/kiweee",
            site: "https://my-priv-journal.herokuapp.com/",
        },
        {
            title: "Voluntiers",
            description: "Dashboard for Voluntiers and Organizations",
            imgURL:"/proj3.png",
            repository: "https://github.com/ddanieela1/voluntiers",
            site: "https://voluntiers.herokuapp.com/",

        },
        {
            title: "Kiwee",
            description: "Photo Album App",
            imgURL:"/proj4.png",
            repository: "https://github.com/ddanieela1/kiweee",
            site: 'https://kiweee.herokuapp.com/',
        },

    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        {/* <img id="projects-section" src={'/coding.png'}></img> */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
{/* 
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>

                            </Nav> */}

                            <Tab.Content>

                                <Tab.Pane id="proj-pane" eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return(
                                                    <ProjectDetail 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane >


                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={'/intro.png'}></img>
        </section>
    )
}