import styled from 'styled-components';

const TypesSection = styled.section`
  ul {
    display: flex;
    margin: 0 88px;
    li {
      width: 50%;
      text-align: center;
      color: #666;
      font-size: 18px;
      padding: 16px 0;
      position: relative;
      font-weight: 300;
      &.selected {
        color: #333;
        font-weight: 1000;
        ::after {
          content: '';
          display: block;
          height: 4px;
          position: absolute;
          bottom: 8px;
          border-radius: 4px;
          background: #485bff;
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;


export {TypesSection};
