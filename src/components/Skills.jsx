import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const Skills = () =>{


    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <section className="skill" id="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">

                        <h2>
                            Skills
                        </h2>
      
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                            <div className="item">
                                {/* <img src={img} alt="item-image" /> */}
                                <h5>Web developer</h5>
                            </div>

                            <div className="item">
                                {/* <img src={img} alt="item-image" /> */}
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                {/* <img src={img} alt="item-image" /> */}
                                <h5>Javascript</h5>
                            </div>

                            <div className="item">
                                {/* <img src={img} alt="item-image" /> */}
                                <h5>Python</h5>
                            </div>

                        </Carousel>

                        </div>
                    </div>
                </div>
            </div>        
        </section>

    )
}