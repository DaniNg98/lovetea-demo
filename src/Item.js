import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  color: #fff;
  font-size: 4em;

  @media screen and (max-width: 450px) {
    height: 260px;
  }
  @media screen and (max-height: 430px) {
    height: 300px;
  }
`;
