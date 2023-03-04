import {useState,useEffect} from 'react'
import {Col,Container,Row} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import { Link } from "react-router-dom";



export const Banner = () => {

    const [loopNumber,setLoopNumber] = useState(0);
    let[isDeletedWord, setIsDeletedWord] = useState(false);
    const [textDisplayed,setTextDisplayed] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index,setIndex] = useState(1);
    const period = 2000;
    const rotation = ['Software Enginner','Full Stack Engineer', 'Front-End Developer','Back-End Engineer','React Developer', 'Django Developer' ]
    

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);

        return ()=>{clearInterval(ticker)}
    },[textDisplayed])

    const tick = ()=>{
        let i = loopNumber % rotation.length;
        let fullText = rotation[i];
        let updatedText = isDeletedWord ? fullText.substring(0, textDisplayed.length - 1) : fullText.substring(0,  textDisplayed.length + 1);

        setTextDisplayed(updatedText);
        
        if(isDeletedWord){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeletedWord && updatedText === fullText){
            setIsDeletedWord(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }else if(isDeletedWord && updatedText === ''){
            setIsDeletedWord(false);
            setLoopNumber(loopNumber + 1);
            setIndex(1);
            setDelta(500);
        }else{
            setIndex(prevIndex => prevIndex + 1);
        }

    }


    return (
        <section className ="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                   
                {/* <span className="tagline"> Welcome to my portfolio </span> */}
                <Container className='intro-banner'>

                <h1 className="intro">{`Hi I'm a `}<span className="wrap">{textDisplayed}</span> </h1>


                {/* <img src={'/webpage.jpeg'} className="webpage" alt="Window Img" /> */}

                </Container>

                {/* <Link to='https://react.semantic-ui.com/'> */}
                {/* <a href='https://react.semantic-ui.com/' type='button' >Lets Connect <ArrowRightCircle size={25} /></button> */}
                {/* </Link>     */}

                <a class='ban-button' href="https://www.linkedin.com/in/daniela-villanueva-111413248/" type="button" className='connect-btn'>Lets Connect <ArrowRightCircle size={25} /></a>
                </Col>
                <Col className="decoration" xs={12} md={6} xl={5}>
                    <img src={'/cursor.png'} className="cursor" alt="HeaderImg" />
                    {/* <img src={'/window1.png'} className="window" alt="Window Img" /> */}
                </Col>
            </Row>
        </Container>
        </section>
    )
}

