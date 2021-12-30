import React, {ChangeEventHandler} from 'react';
import styled from 'styled-components';
import {Input} from 'components/Input';

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
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Wrapper>
      <label>
        <Input type='text' value={note} onChange={onChange} />
      </label>
    </Wrapper>
  );
};

export {NoteSection};
