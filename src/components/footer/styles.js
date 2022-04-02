import styled from "@emotion/styled";
export const Styles = styled.div`
  padding: 24px;
  background-color: #2c3440;

  .nav-items {
    display: flex;
  }

  a.nav-link {
    color: #567;
    text-decoration: none;
    margin-inline-end: 12px;
    display: flex;
    align-items: center;
    &:hover {
      transition: all 0.3s;
      color: white;
    }
    svg {
      margin-inline-end: 6px;
    }
  }
  .logo {
    width: 90%;
    max-width: 180px;
    margin-bottom: 24px;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
  }
  .social-link-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .social-link {
    margin-inline-end: 16px;
    svg {
      color: #567;
      font-size: 24px;
    }
    &:hover svg {
      transition: all 0.3s;
      color: white;
    }
  }
  .copyrights {
    color: #567;
    font-size: 13px;
    marhin-top: 8px;
  }
`;
