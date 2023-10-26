import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectDetail } from './ProjectDetail';

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane id="proj-pane" eventKey="first">
              <Row>
                <Col>
                  <div>
                    <ProjectDetail />
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
