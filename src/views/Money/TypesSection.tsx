import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
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
        color: #06f;
        font-weight: 1000;
        ::after {
          content: '';
          display: block;
          height: 4px;
          position: absolute;
          bottom: 8px;
          border-radius: 4px;
          background: #06f;
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;

const TypesSection: React.FC = () => {
  const [type, setType] = React.useState('-'); // + 收入，- 支出

  return (
    <Wrapper>
      <ul>
        <li
          className={type === '-' ? 'selected' : ''}
          onClick={() => {
            setType('-');
          }}
        >
          支出
        </li>
        <li
          className={type === '+' ? 'selected' : ''}
          onClick={() => {
            setType('+');
          }}
        >
          收入
        </li>
      </ul>
    </Wrapper>
  );
};

export {TypesSection};
