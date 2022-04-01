import styled from "@emotion/styled";
import money from "images/money.jpg";

export const Styles = styled.div`
  background-image: url(${money});
  background-size: cover;
  height: 89vh;

  div.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(3px);
    padding-inline-start: 24px;
    padding-inline-end: 24px;
    background-image: linear-gradient(to right, #14181c, #00000000, #14181c);

    height: 100%;
  }
  h1 {
    font-size: 3rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 432px;
  }
  .input-form {
    margin-bottom: 24px;
  }
  .submit-btn {
    color: white;
  }
  .navigate {
    display: flex;
    align-items: center;
    color: white;
  }

  .navigate > .link:hover {
    text-decoration: underline;
  }
  .link {
    color: #0288d1;
    font-weight: 500;
    text-decoration: none;
  }
`;
