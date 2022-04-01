import styled from "@emotion/styled";
export const Styles = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
  }
  .blur {
    background-image: linear-gradient(#000000ab, #14181c);
    backdrop-filter: blur(8px);
  }
  .nav-items {
    display: flex;
  }

  a.nav-link {
    color: white;
    text-decoration: none;
    margin-inline-end: 12px;
    display: flex;
    align-items: center;
    svg {
      margin-inline-end: 6px;
    }
  }

  .logo {
    width: 180px;
  }
`;
