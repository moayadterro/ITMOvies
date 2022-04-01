import styled from "@emotion/styled";
export const Styles = styled.div`
  .poster {
    width: 100%;
    height: 500px;
    background-size: cover;
  }
  .poster-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#14181c, #00000000, #14181c);
    height: 500px;

    h1 {
      font-weight: 500;
      text-shadow: 0px 0px 5px black;
      font-size: 1.9em;
    }
  }
  .info {
    color: #0288d1;
  }

  .warning {
    color: #f57c00;
  }
  .register-btn {
    color: white;
    font-weight: 400;
    margin-bottom: 64px;
  }
  .link {
    text-decoration: none;
  }
  .popular-movie-stack {
    margin-top: 32px;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
