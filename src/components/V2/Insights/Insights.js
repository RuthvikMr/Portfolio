import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import DynamicContents from "../../../Util/shared/DCT/Dct";
import { Typography } from "antd";

export default function Insights() {
  const { Title } = Typography;
  const tabData = {
    data: [
      {
        title: "MR Wallet",
        key: "projects",
        image: 'Projects/mrWallet.png',
        animate: true,
        style: {
          height: '570px',
          imgHeight: '250px',
        },
        text: "An offline app for storing personal information. For the data safty used encryption techniques and 2FA , including biometric authentication.",
        demoLink: 'https://play.google.com/store/apps/details?id=com.ruthvik.wallet&pcampaignid=web_share'
      },
      {
        title: "Cricket Team Maker",
        key: "projects",
        animate: true,
        image: 'Projects/cricketTeamMaker.png',
        style: {
          height: '570px',
          imgHeight: '250px',
        },
        text: "A Java mobile applications built during my college times. Used for splitting the players into two different teams using java's built-in methods.",
        demoLink: 'https://play.google.com/store/apps/details?id=com.ruthvik.cricketteamselection&pcampaignid=web_share'
      },
      {
        title: "Portfolio",
        key: "projects",
        image: 'Projects/portfolio.png',
        animate: true,
        style: {
          height: '570px',
          imgHeight: '250px',
          stretchImg: '275px'
        },
        text: "A Json driven portfolio website built using react js and firebase. It showcases Bio, Projects, Skills, Resume also it consists features like multi language support, News related to technology and a Guide Book."
      },
      {
        title: "Javascript",
        key: "techStack",
        icon: 'BiRocket',
        style: {
          width: '12rem'
        },
        iconSettings: {
          package: 'bi',
          color: '#f7df1e',
          size: '3rem'
        },
      },
      {
        title: "Angular",
        key: "techStack",
        icon: 'SiAngular',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#DD0031'
        },
      },
      {
        title: "React JS",
        key: "techStack",
        icon: 'DiReact',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'di',
          size: '3rem',
          color: '#61DBFB'
        },
      },
      {
        title: "Ionic",
        key: "techStack",
        icon: 'SiIonic',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#3880ff'
        },
      },
      {
        title: "Java",
        key: "techStack",
        icon: 'DiJava',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'di',
          size: '3rem',
          color: '#f89820'
        },
      },
      {
        title: "Node JS",
        key: "techStack",
        icon: 'DiNodejs',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'di',
          size: '3rem',
          color: '#68A063'
        },
      },
      {
        title: "Windows",
        key: "tools",
        icon: 'SiWindows11',
        style: {
          width: '12rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#0078D6'
        },
      },
      {
        title: "VS Code",
        key: "tools",
        icon: 'SiVisualstudiocode',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#007ACC'
        },
      },
      {
        title: "Postman",
        key: "tools",
        icon: 'SiPostman',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#FF6C37'
        },
      },
      {
        title: "Git",
        key: "tools",
        icon: 'DiGit',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'di',
          size: '3rem',
          color: '#F05032'
        },
      },
      {
        title: "Firebase",
        key: "tools",
        icon: 'SiFirebase',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#FFCA28'
        },
      },
      {
        title: "Android",
        key: "tools",
        icon: 'SiAndroidstudio',
        style: {
          width: '11rem',
        },
        iconSettings: {
          package: 'si',
          size: '3rem',
          color: '#3DDC84'
        },
      }
    ],
    tabs: [
      {
        name: "News",
        key: "news",
        icon: "BiNews",
        iconSettings: {
          package: 'bi'
        }
      },
      {
        name: "Guide",
        key: "guide",
        icon: "BiBookReader",
        iconSettings: {
          package: 'bi'
        }
      }
    ]
  }

  return ((
    <section
      style={{
        background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        padding: "60px 0",
      }}
    >
      <Container className="p-5">
        <Title
          className="text-center"
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            fontFamily: "'Poppins', sans-serif",
            background: "linear-gradient(to right, #a855f7, #6366f1)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "0px",
          }}
        >
          Explore More Insights
        </Title>
        <p
          className="text-center text-light mb-5"
          style={{
            opacity: 0.85,
            fontSize: "1.15rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
           learn and grow new skills here!
        </p>
        <Particle />
        <DynamicContents
          type='tab'
          tabData={tabData}
          sharedComponent={true}
          animate={false} />
      </Container>
    </section>
  ))
}