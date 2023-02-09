import {useState,useEffect} from 'react'
import {Col,Container,Row} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
// import 'animate.css'
import TrackVisibility from 'react-on-screen'


export const Banner = () => {

    const [loopNumber,setLoopNumber] = useState(0);
    let[isDeletedWord, setIsDeletedWord] = useState(false);
    const [textDisplayed,setTextDisplayed] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index,setIndex] = useState(1);
    const period = 2000;
    const rotation = ['Full Stack Engineer', 'React', 'Django' ]
    

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
            setIsDeletedWord = (true);
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
                    <TrackVisibility>
                <span className="tagline"> Welcome to my portfolio </span>

                <h1>{`Hi I'm a`}<span className="wrap">{textDisplayed}</span> </h1>
                <p>Dummy Text</p>
                <button onClick={() =>console.log("connect")}>Lets Connect <ArrowRightCircle size={25} /></button>
                    </TrackVisibility>

                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={'/cursor.png'} alt="Header Img" />

                </Col>
            </Row>
        </Container>

        </section>
    )
}

