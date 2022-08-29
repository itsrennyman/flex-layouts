import styled from "@emotion/styled";

const Section = styled("section")({
  display: "flex",
  minHeight: "100vh",
  minHeight: "fill-available",
  minHeight: "-webkit-fill-available",
});

const Title = styled("aside")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "100vh",
  position: "sticky",
  top: 0,
  fontSize: "6rem",
  textAlign: "center",
  fontWeight: 700,
  letterSpacing: "-0.04em",
});

const Content = styled("main")({
  flex: 1,
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: 10,
  padding: 16,
  backgroundColor: "hsl(226, 18%, 14%)",
});

const Item = styled("div")({
  backgroundColor: "hsl(37, 98%, 53%)",
  height: 150,
});

const VerticalStack = () => {
  const items = Array.from({ length: 45 }).map((_element, idx) => (
    <Item key={idx} />
  ));

  return (
    <Section>
      <Title>Vertical Stack</Title>
      <Content>
        <Wrapper>{items}</Wrapper>
      </Content>
    </Section>
  );
};

export { VerticalStack };
