import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  div {
      border: 5px solid #f46f25;
      height: 173px;
      width: 173px;
      margin: 0 5px 15px 5px;
      overflow: hidden; 
      float:left;
      border-radius: 15px;
    
      img {
        padding: 5px;
        height: 163px;
      }
      
      @media only screen and (max-width: 870px) {
        float: none;
        margin: 15px auto;
      }
  }
`;

export default Wrapper;