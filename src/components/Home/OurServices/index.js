import React from "react";

import { Container, Wrapper } from "../../layout";
import { Content } from "./style";
import TitleSection from "../../Sections/TitleSection";
import { GiClockwork } from "react-icons/gi";
import BlockItem from "../../Sections/BlockItem/BlockItem";
import serviceImg from "../../../images/service_img.jpg";

const index = () => {
  return (
    <Container isBackgroundWhite>
      <Wrapper>
        <TitleSection
          title="Our Services"
          supTitle=" Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            a sit amet mauris. Morbi accumsan ipsum velit"
          bg={serviceImg}
        />

        <Content className="w-full flex justify-between flex-wrap">
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
          <BlockItem
            title="Fast pest removal"
            description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            bg={serviceImg}
          >
            <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
          </BlockItem>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default index;
