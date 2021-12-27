import styled from 'styled-components';
import React from 'react';
// import Icon from 'components/Icon';

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
      /* .icon {
        width: 1.8em;
        height: 1.8em;
        fill: #333;
      } */
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

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = React.useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        console.log('点');
        break;
      case '删除':
        console.log('删除');
        break;
      case '清零':
        console.log('清零');
        break;
      case '保存':
        console.log('保存');
        break;
    }
  };

  return (
    <Wrapper>
      <div className='outputNode'>
        <div className='outputName'>金额</div>
        <div className='output'>{output}</div>
      </div>
      <div className='pad clearfix' onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          删除
          {/* <Icon name='delete' /> */}
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清零</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>保存</button>
        <button className='zero'>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};
