import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../images/profile.png'
export default function Task1() {
  return (
    <div>


      <Container className='mt-2'>
        <Row className='text-center mt-2 '>
          <Col className='d-flex justify-content-center'> <h3 className="bgcolor  " >Company Name</h3></Col>

        </Row>

        <Row className='text-center  mt-2 '>
          <Col> <p>Welcome to [Your Company Name], where a dedicated team of professionals works <br />together to bring innovation, creativity and expertise to software industry get to know <br />the individuals who make our company thrive</p></Col>

        </Row>
        <Row className='text-center  mt-2 '>
          <Col className='d-flex justify-content-center' > <h3 className=' w-50 bgdimcolor'>-------------------------</h3></Col>

        </Row>

        <div className='mt-4'>
          <Row className='text-center   mt-2 '>
            <Col> <h2>Meet Our Team</h2></Col>

          </Row>

          <Row className='text-center   mt-4 '>
            <Col className='d-flex justify-content-center'> <h5 className=" bgcolor" >Leadership / Management Team</h5></Col>

          </Row>

          <Row className='text-center   mt-2 '>
            <Col>
              <div >
                <img className='photo' src={profile} alt="Profile pic" />
                <h6 >[ Founder Name ]</h6>
                <em >Founder/CEO</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                <h6 >[ Founder Name ]</h6>
                <em >Founder/CEO</em>
              </div>
            </Col>
          </Row>
          <Row className='text-center   mt-4 '>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ VP Name ]</h6>

                <em >VP, Developement & Growth</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ VP Name ]</h6>

                <em >VP, Sales & Marketing</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ VP Name ]</h6>

                <em >VP, Finance & Operation </em>
              </div>
            </Col>

          </Row>
        </div>
        <div className='mt-4'>
          <Row className='text-center   mt-4 '>
            <Col className='d-flex justify-content-center'> <h5 className="bgcolor" >Developement Team</h5></Col>

          </Row>

          <Row className='text-center mt-4 '>
          <Col> 
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Team Lead, SE</em>
              </div>
            </Col>
            <Col>
              <div>
                <img  className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
          </Row>
          <Row className='text-center   mt-4 '>
          <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Developer Name ]</h6>

                <em >Software Engineer</em>
              </div>
            </Col>
          </Row>
        </div>


        <div className='mt-4'>

          <Row className='text-center   mt-4 '>
            <Col className='d-flex justify-content-center'> <h5 className="bgcolor" >Sales / Marketing Team</h5>
            </Col>

          </Row>

          <Row className='text-center mt-4 '>
          <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Team Lead</em>
              </div>
            </Col>
            <Col>
              <div>
                <img  className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img  className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img  className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
          </Row>
          <Row className='text-center   mt-4  d-flex'>
          <Col>
              <div>
                <img className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
            <Col>
              <div>
                <img className='photo'  src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
            <Col >
              <div>
                <img  className='photo' src={profile} alt="Profile pic" />
                               <h6 >[ Employee Name ]</h6>

                <em >Sales Officer</em>
              </div>
            </Col>
          </Row>
        </div>



      </Container>
    </div>
  )
}
