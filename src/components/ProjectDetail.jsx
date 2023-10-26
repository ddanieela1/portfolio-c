import { Card, Col, Row } from 'react-bootstrap';
import { DistributeVertical } from 'react-bootstrap-icons';
import { project } from '../../utils/data';

export const ProjectDetail = () => {
  return (
    <Row>
      <h2>Projects</h2>
      {project.map((project, index) => (
        <Col md={6} key={index} className="d-flex">
          <div className="proj-card">
            <div className="proj-imgbx">
              <img src={project.imgURL} />
              <div className="proj-body">
                <div className="proj-txtx">
                  <h4 className="proj-title">{project.title}</h4>
                  <div>
                    <span className="proj-description">
                      {project.description}
                    </span>
                  </div>
                  <a href={project.site}>{project.title} Site</a>
                  <div>
                    <a href={project.repository}>{project.title} Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
