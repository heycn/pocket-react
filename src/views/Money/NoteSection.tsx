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

const NoteSection: React.FC = () => {
  const [note, setNote] = React.useState('');
  return (
    <Wrapper>
      <label>
        <input type='text' placeholder='输入备注信息...' value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
    </Wrapper>
  );
};

export {NoteSection};