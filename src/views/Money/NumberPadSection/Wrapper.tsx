import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .outputNode {
    background: none;
    position: relative;
    .outputName {
      position: absolute;
      text-align: center;
      font-size: 18px;
      font-weight: 1000;
      line-height: 64px;
      padding-left: 12px;
      color: #666;
    }
    .output {
      font-size: 36px;
      line-height: 64px;
      text-align: right;
      padding: 0 12px;
      border-top: 0.5px solid rgba(0, 0, 0, 0.15);
      box-shadow: inset 0 -4px 4px -4px rgba(0, 0, 0, 0.1);
    }
  }
  .pad {
    button {
      background: #ededed;
      float: left;
      color: #333;
      width: 25%;
      height: 56px;
      font-size: 16px;
      font-weight: 1000;
      .icon {
        width: 1.8em;
        height: 1.8em;
        fill: #333;
      }
      &.ok {
        height: 112px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #fff;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #f8f8f8;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #eee;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #e8e8e8;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #ddd;
      }
      &:nth-child(14) {
        background: #d8d8d8;
      }
      &:nth-child(12) {
        background: #ccc;
        color: #06f;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11),
      &:nth-child(13) {
        font-size: 24px;
        font-weight: 300;
      }
    }
  }
`;

export {Wrapper};
