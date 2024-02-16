import { Component } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <Container sm={12} md={9} className=" offset-md-3 mainPage">
        <Row>
          <Col sm={9} lg={11} className=" mainLinks d-none d-md-flex">
            <NavLink href="#">TRENDING</NavLink>
            <NavLink href="#">PODCAST</NavLink>
            <NavLink href="#">MOODS AND GENRES</NavLink>
            <NavLink href="#">NEW RELEASES</NavLink>
            <NavLink href="#">DISCOVER</NavLink>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="hiphop">
              <h2>#HipHop</h2>
              <Row
                className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
