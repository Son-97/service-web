import styled from "styled-components";

export const Content = styled.div`
  color: #cacaca;
  .contact-footer {
  }
  @media screen and (max-width: 768px) {
    .contact-footer {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .row {
        padding-bottom: 15px;
      }
    }
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 50px 0px;
`;
