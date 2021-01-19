import React from "react";

import { Title, SupText } from "../layout";

const index = (props) => {
  const { title, supTitle } = props;
  return (
    <div className="pb-12">
      <Title {...props}>
        <span>{title}</span>
      </Title>
      <SupText {...props}>{supTitle}</SupText>
    </div>
  );
};

export default index;
