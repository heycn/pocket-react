import styled from 'styled-components';

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  button {
    background: none;
    color: #485bff;
    padding: 4px 16px;
    border: 1px solid;
    border-radius: 16px;
    font-size: 14px;
  }
  ol {
    margin: 0 -6px;
    margin-top: 6px;
    li {
      background: #f4f4f4;
      color: #999;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 16px;
      font-size: 14px;
      margin: 8px;
    }
  }
`;


export {TagsSection};
