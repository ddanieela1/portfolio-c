import { Col} from "react-bootstrap";

export const ProjectDetail = ({title,description,imgURL}) => {

    return(
     <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgURL} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                {/* <a href={site}>Click here</a> */}
                {/* <a href={Repository}>Repository</a> */}
            </div>
        </div>
     </Col>
    )
}