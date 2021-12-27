import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';

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
        color: #666;
        font-weight: 300;
      }
    }
  }
`;

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  .outputNode {
    background: white;
    position: relative;
    .outputName {
      position: absolute;
      text-align: center;
      font-size: 16px;
      font-weight: 1000;
      line-height: 64px;
      padding-left: 12px;
    }
    .output {
      font-size: 36px;
      line-height: 64px;
      text-align: right;
      padding: 0 12px;
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.15);
    }
  }
  .pad {
    button {
      background: #ededed;
      float: left;
      color: #333;
      width: 25%;
      height: 56px;
      font-size: 18px;
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
        color: #485bff;
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
        font-weight: 150;
        color: #666;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TypesSection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </TypesSection>

      <TagsSection>
        <button>新增标签</button>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
      </TagsSection>

      <NotesSection>
        <label>
          <input type='text' placeholder='请输入备注信息...' />
        </label>
      </NotesSection>

      <NumberPadSection>
        <div className='outputNode'>
          <div className='outputName'>金额</div>
          <div className='output'>100</div>
        </div>
        <div className='pad clearfix'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <Icon name='delete' />
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
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
