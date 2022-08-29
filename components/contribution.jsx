import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FiGithub } from "react-icons/fi";
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

const rainbow = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const Spacer = styled("div")((props) => ({
  height: `${props.size}px`,
}));

const Button = styled("button")({
  background: "linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5)",
  backgroundSize: "800% 400%",
  padding: "0 1.5em",
  height: "4rem",
  display: "inline-flex",
  alignItems: "center",
  gap: "24px",
  flexShrink: 0,
  border: "none",
  borderRadius: 10,
  fontSize: "1.5rem",
  letterSpacing: "-0.04em",
  cursor: "pointer",
  fontWeight: 600,
  color: "white",
  transition: "all 0.1s ease-in-out",
  textDecoration: "none",
  animation: `${rainbow} 10s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both`,

  "&:hover": {
    transform: "scale(1.03)",
  },

  "&:active": {
    transform: "scale(0.95)",
  },
});

const Contribution = () => {
  return (
    <Section>
      <Title>Wanna Contribute?</Title>
      <Spacer size={32} />
      <Button as="a" href="https://github.com/itsrennyman/flex-layouts">
        Share the Fantasy <FiGithub />
      </Button>
    </Section>
  );
};

export { Contribution };
