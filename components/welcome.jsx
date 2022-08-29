import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FiArrowDown } from "react-icons/fi";
import { mq } from "../utils";

const Section = styled("section")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "hsl(0, 0%, 0%)",
});

const Title = styled("div")({
  textAlign: "center",
  fontWeight: 700,
  letterSpacing: "-0.04em",
  color: "hsl(0, 0%, 100%)",
  fontSize: "4rem",
  [mq[2]]: {
    fontSize: "6rem",
  },
});

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const ScrollIcon = styled("div")({
  fontSize: "3rem",
  opacity: "0.7",
  color: "hsl(0, 0%, 100%)",
  animation: `${bounce} 1s ease infinite`,
  marginTop: "64px",
});

const Credits = styled("div")({
  fontSize: "1.5rem",
  fontWeight: 300,
  color: "rgb(161 161 170);",
  letterSpacing: "-0.04em",
  marginTop: "16px",
});

const Link = styled("a")({
  color: "hsl(0, 0%, 100%)",
  textDecoration: "none",
});

const Welcome = () => {
  return (
    <Section>
      <Title>CSS Flexbox Layouts</Title>
      <Credits>
        Taught by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/imarenny"
        >
          Renato Pozzi
        </Link>
      </Credits>
      <ScrollIcon>
        <FiArrowDown />
      </ScrollIcon>
    </Section>
  );
};

export { Welcome };
