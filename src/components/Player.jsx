import { Col, Container, NavLink, Row } from "react-bootstrap";

const Player = () => {
  return (
    <Container className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className=" offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <NavLink>
                  <img
                    src="/public/assets/playerbuttons/shuffle.png"
                    alt="shuffle"
                  />
                </NavLink>
                <NavLink href="#">
                  <img src="/public/assets/playerbuttons/prev.png" alt="prev" />
                </NavLink>
                <NavLink href="#">
                  <img src="/public/assets/playerbuttons/play.png" alt="play" />
                </NavLink>
                <NavLink href="#">
                  <img src="/public/assets/playerbuttons/next.png" alt="next" />
                </NavLink>
                <NavLink href="#">
                  <img
                    src="/public/assets/playerbuttons/repeat.png"
                    alt="repeat"
                  />
                </NavLink>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
