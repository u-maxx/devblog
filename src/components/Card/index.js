import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e6ed;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  margin-bottom: 30px;
  padding: 75px 100px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
  
  p {
    text-align: justify;
    margin: 10px auto 0;
    max-width: 650px;
    padding: 0 35px 0;
  }
  
  a {
     font-weight: bolder;
  }
  
  article {
    text-align: justify;
    p {
      padding: 0 5px 0;
    }
  }
`;

export default Card;