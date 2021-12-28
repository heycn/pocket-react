import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  ul {
    display: flex;
    li {
      width: 50%;
      text-align: center;
      color: #666;
      font-size: 18px;
      padding: 16px 0;
      position: relative;
      font-weight: 300;
      /* border: 2px solid red; */
      margin: 0 40px;
      &.selected {
        color: #06f;
        font-weight: 1000;
        ::after {
          content: '';
          display: block;
          height: 2px;
          position: absolute;
          border-radius: 2px;
          background: #06f;
          width: 100%;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`;

// 声明类型
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
};

const TypesSection: React.FC<Props> = (props) => {
  const typeMap = {'-': '支出', '+': '收入'};
  const [typeList] = React.useState<('-' | '+')[]>(['-', '+']);
  const type = props.value;
  return (
    <Wrapper>
      <ul>
        {typeList.map((c) => (
          <li
            key={c}
            className={type === c ? 'selected' : ''}
            onClick={() => {
              props.onChange(c);
            }}
          >
            {typeMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export {TypesSection};
