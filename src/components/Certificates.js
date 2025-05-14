// src/components/Certificates

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { certificates } from "../data";
import { Box, Typography, Button, Modal } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const jobDetails = {
  frontend: {
    title: "NGSC TECHNOLOGY CONSULTING JOINT STOCK COMPANY",
    type: "(ON-site, Part-time)",
    details: [
      "Participate in developing 1 internal project(erp) and 1 banking project(simo sbv).",
      "Contributed to 15% increase in application performance by optimizing asynchronous JavaScript executions.",
      "Worked with Redux for efficient state management, reducing application crashes by 20%.",
      "Participated in the design phase with UX/UI teams, facilitating a 30% improvement in design feasibility.",
      "Technology Stack: HTML, CSS, JavaScript (ES6+), TypeScript, ReactJS, Redux, NextJS, PrimeReact, Ant Design, Oracle Database, Git, and Docker.",
    ],
  },
  etl: {
    title: "NGSC TECHNOLOGY CONSULTING JOINT STOCK COMPANY",
    type: "(On-site: Fortune Vietnam Joint Stock Commercial Bank - LPBank)",
    details: [
      "Project: SYSTEM T10 - OPEX COST CALCULATION AND ALLOCATION PHASE",
      "Design and implement ETL workflows using Oracle Database and ODI.",
      "Optimized data loading processes, reducing latency by 30%.",
      "Collaborated with data analysts and business analyst teams to maintain data integrity.",
      "Technology Stack: SQL, PL/SQL, Oracle Database, ODI.",
    ],
  },
  de: {
    title:
      "SMARTF - BUILDING A QUALITY MONITORING SYSTEM AND OPERATION, EXPLOITATION(MobiFone)",
    type: "(Full-time)",
    details: [
      "Perform (ETL) by collecting, transforming and putting data into Data Warehouse using ODI tools.",
      "Optimized data loading processes, reducing latency by 10%.",
      "Operate, manage and repair OLAP Cubes in SSAS.",
      "Participate in operating and deploying streaming data from Kafka -> Postgres DB using KSQL, Python.",
      "Collaborated with data analysts and business analyst teams to maintain data integrity.",
      "Technology Stack: SQL, KSQL, Oracle, SQL Server, PostgreSQL, ODI, SSAS, Kafka.",
    ],
  },
};

export default function Certificates() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalJob, setModalJob] = React.useState(null);

  const openModal = (jobKey) => {
    setModalJob(jobDetails[jobKey]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalJob(null);
  };

  return (
    <section id="certificates">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Qualifications
        </h1>
        <div className="m-4">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            centered
          >
            <Tab
              icon={<SchoolIcon fontSize="medium" color="primary" />}
              iconPosition="start"
              label="Education"
              style={{ color: "white" }}
            />
            <Tab
              icon={<WorkIcon fontSize="medium" color="primary" />}
              iconPosition="start"
              label="Experience"
              style={{ color: "white" }}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> 2020 - 2025
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    The degree of engineer - Software Engineering
                  </Typography>
                  <Typography>
                    Post and Telecommunications Institute of Technology (PTIT)
                    <br />
                    Degree classification: Good
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> 2025
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    TOEIC Certificate
                  </Typography>
                  <Typography>
                    Ability to use English: Reading, Writing Skills{" "}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> 2025
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    SQL (Advanced) Certificate
                  </Typography>
                  <Typography>
                    <Button
                      component="a"
                      target="_blank"
                      href="https://www.hackerrank.com/certificates/iframe/1097f679250b"
                    >
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> 2025
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    SQL (Intermediate) Certificate
                  </Typography>
                  <Typography>
                    <Button
                      component="a"
                      target="_blank"
                      href="https://www.hackerrank.com/certificates/iframe/208b6687549b"
                    >
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Foundations of Project Management
                  </Typography>
                  <Typography>
                    <Button
                      component="a"
                      target="_blank"
                      href="https://www.coursera.org/account/accomplishments/certificate/96T6MQG583F2"
                    >
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> October 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Data Engineer
                  </Typography>
                  <Typography>
                    <Button onClick={() => openModal("de")}>
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> May 2024 - October 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    ETL Developer
                  </Typography>
                  <Typography>
                    NGSC TECHNOLOGY CONSULTING JOINT STOCK COMPANY
                    <br />
                    <Button onClick={() => openModal("etl")}>
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="info"
                >
                  <CalendarMonthIcon /> July 2023 - May 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    Frontend Developer
                  </Typography>
                  <Typography>
                    NGSC TECHNOLOGY CONSULTING JOINT STOCK COMPANY
                    <br />
                    <Button onClick={() => openModal("frontend")}>
                      View
                      <ArrowForwardIcon />
                    </Button>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="job-modal-title"
        aria-describedby="job-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400, md: 500 },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography
            id="job-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            {modalJob?.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {modalJob?.type}
          </Typography>
          <Box component="ul" sx={{ mt: 2, pl: 2 }}>
            {modalJob?.details.map((item, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}
              >
                <CheckCircleOutlineIcon
                  fontSize="small"
                  sx={{ mt: "2px", mr: 1 }}
                  color="primary"
                />
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </section>
  );
}
