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
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: 16,
  backgroundColor: "hsl(327, 65%, 56%)",
});

const Item = styled("div")({
  backgroundColor: "hsl(183, 100%, 91%)",
  width: "49%",
  height: 150,
  marginBottom: "2%",

  "&:nth-child(3n)": {
    width: "100%",
  },
});

const AlternateGrid = () => {
  const items = Array.from({ length: 45 }).map((_element, idx) => (
    <Item key={idx} />
  ));

  return (
    <Section>
      <Title>Alternate Grid</Title>
      <Content>
        <Wrapper>{items}</Wrapper>
      </Content>
    </Section>
  );
};

export { AlternateGrid };
