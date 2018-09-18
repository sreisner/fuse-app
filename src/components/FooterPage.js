import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class FooterPage extends Component {
  render() {
    return (
      <Footer color="indigo" className="font-small pt-0">
        <Container>
          <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">About us</a>
              </h6>
            </Col>
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Products</a>
              </h6>
            </Col>
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">FAQ</a>
              </h6>
            </Col>
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <a href="#!">Contact</a>
              </h6>
            </Col>
          </Row>
          <hr className="rgba-white-light" style={{ margin: '0 15%' }} />
          <Row className="pb-3">
            <Col md="12">
              <div className="mb-5 flex-center">
                <a className="fb-ic">
                  <i className="fa fa-facebook fa-lg white-text mr-md-4"> </i>
                </a>
                <a className="tw-ic">
                  <i className="fa fa-twitter fa-lg white-text mr-md-4"> </i>
                </a>
                <a className="ins-ic">
                  <i className="fa fa-instagram fa-lg white-text mr-md-4"> </i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()}
            <p> Fuse Delivery, LLC</p>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
