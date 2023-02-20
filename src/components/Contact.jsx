import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";

export const Contact = () => {
    const blankContactForm = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }

    const [formDetails, setFormDetails] = useState(blankContactForm);
    const [buttonsText,setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    // update indicated field,leave remaining fields intact

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending message...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(blankContactForm);
        if (result.code === 200) {
            setStatus({success: true, message: "Message sent"});
        }else{
            setStatus({success: false, message: "Message not sent"});
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img className="contactImg" src={"/footer-pic.jpg"} alt="contactImg" />

                    </Col>
                    <Col md={6}>
                        <Row>
                            <h2>Get In Touch! Send a Message!</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>

                                    <Col sm={6} className="px-1">
                                        <input type="text" className="info" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate("firstName", e.target.value)}></input>
                                    </Col>

                                    <Col sm={6} className="px-1">
                                        <input type="text" className="info" value={formDetails.firstName} placeholder="Last Name" onChange={(e)=>onFormUpdate("lastName", e.target.value)}></input>
                                    </Col>
                                    
                                    <Col sm={6} className="px-1">
                                        <input type="email" className="info" value={formDetails.email} placeholder="e-mail" onChange={(e)=>onFormUpdate("email", e.target.value)}></input>
                                    </Col>

                                    <Col sm={6} className="px-1">
                                        <input type="tel" className="info" value={formDetails.phone} placeholder="Phone Number" onChange={(e)=>onFormUpdate("phone", e.target.value)}></input>
                                    </Col>

                                    <Col>
                                    <textarea row="6" className='new-email-input' value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate("message", e.target.value)}></textarea>
                                    </Col>

                                    {/* button state updated,pass variable */}
                                    <button className='new-email-button' type="submit"><span>{buttonsText}</span></button>

                                    {
                                        status.message &&
                                        <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }

                                </Row>
                            </form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}