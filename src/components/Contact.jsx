import { useState } from "react";
import { formatPostcssSourceMap } from "vite";

export const Contact = () => {
    const contactForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }

    const [formDetails, setFormDetails] = useState(contactForm);
    const [buttonsText,setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    // update indicated field,leave remaining fields intact

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={} alt="contactImg" />

                    </Col>
                    <Col md={6}>
                        <Row>
                            <h2>Get In Touch! Send a Message!</h2>
                            <form>
                                <Row>
                                    <Col sm={6} className="px-1">
                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate("firstName", e.target.value)}></input>
                                    </Col>
                                    <Col sm={6} className="px-1"></Col>
                                    
                                </Row>
                            </form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}