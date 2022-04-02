import styled from "@emotion/styled";

export const Styles = styled.div`
  max-width: 1200px;
  margin: auto;
  @media (max-width: 1200px) {
    max-width: 100%;
  }

  .app-template__header {
    top: 0;
    width: 100%;
    z-index: 999;
    position: fixed;
    background: white;
  }

  .app-template__nav {
  }

  .app-template__content {
    overflow-x: hidden;
  }

  .app-template__footer {
    margin-top: 24px;
  }
`;
