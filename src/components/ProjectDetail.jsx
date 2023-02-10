import { Col} from "react-bootstrap";

export const ProjectDetail = ({title,description,imgURL}) => {

    return(
     <Col>
        <div className="proj-imgbx">
            <img src={imgURL} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
     </Col>
    )
}