import styled from 'styled-components';

const NotesSection = styled.section`
  padding: 0px 16px;
  label {
    input {
      background: none;
      display: block;
      font-size: 16px;
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 0;
      ::placeholder {
        color: #333;
        font-weight: 300;
      }
    }
  }
`;

export {NotesSection};
