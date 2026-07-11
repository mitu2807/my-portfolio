import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Mitul_Chaudhari_Resume_V3.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ResumeContent from "./ResumeContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">ABOUT ME</h3>
            <ResumeContent
              title="frontend webdevloper"
              content={[
                `Passionate about frontend development and web development with a strong interest
in building user-friendly, responsive, and modern web applications. Eager to learn new
technologies and contribute to impactful projects`,
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Gujarat Techonological University (Gec Modasa)"
              date="2023 - present"
              content={[`CGPA: 7.13/10 `]}
            />

            <h3 className="resume-title">Softs Skill</h3>
            <Resumecontent
              title=""
              content={[`problem solving`, `Teamwork and Time management `]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
