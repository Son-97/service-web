import React from "react";

import { Container, Wrapper } from "../layout";
import { Content, Line } from "./style";
import ContactFooter from "./ContactFooter";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <Container
      className="text-center w-full h-full"
      style={{
        backgroundColor: "#181818",
      }}
    >
      <Wrapper>
        <Content>
          <ContactFooter />
          <Line />
          <FooterWrapper />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Footer;
