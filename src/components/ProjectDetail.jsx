import { Col} from "react-bootstrap";
import { DistributeVertical } from "react-bootstrap-icons";

export const ProjectDetail = ({title,description,imgURL,site,repository}) => {

    return(
     <Col sm={8} md={6}>
        <div className="proj-imgbx">
            <img src={imgURL} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <div>
                <span>{description}</span>
                </div>
                <a  href={site}>{title} Site</a>
                <div>
                <a href={repository}>{title} Repository</a>
                </div>
            </div>
        </div>
     </Col>
    )
}