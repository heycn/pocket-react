import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0px 16px;
  label {
    input {
      background: none;
      display: block;
      font-size: 18px;
      color: black;
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 0;
      ::placeholder {
        color: #666;
        font-weight: 300;
      }
    }
  }
`;

// 声明类型
type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  return (
    <Wrapper>
      <label>
        <input type='text' placeholder='输入备注信息...' value={note} onChange={(e) => props.onChange(e.target.value)} />
      </label>
    </Wrapper>
  );
};

export {NoteSection};
