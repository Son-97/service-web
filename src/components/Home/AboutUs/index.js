import React from "react";

import { Container, Wrapper } from "../../layout";
import { Content } from "./style";
import TitleSection from "../../Sections/TitleSection";
import bg from "../../../images/about_us_bg.jpg";
import BlockLeft from "./BlockLeft";
import BlockRight from "./BlockRight";

const index = () => {
  return (
    <Container
      className="text-center w-full h-full bg-cover bg-no-repeat relative"
      style={{ backgroundImage: "url(" + bg + ")" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0, 0, 0, 0.8)" }}
      />
      <Wrapper>
        <TitleSection
          title="About Us"
          supTitle=" Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            a sit amet mauris. Morbi accumsan ipsum velit"
          colorWhite
        />
        <Content>
          <BlockLeft />
          <BlockRight />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default index;
