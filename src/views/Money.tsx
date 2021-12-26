import Layout from '../components/Layout';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  ol {
    margin: 0 -6px;
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
  button {
    background: none;
    color: #666;
    padding: 4px;
    border-bottom: 1px solid;
    font-size: 14px;
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
      border-bottom: 1px solid #999;
      ::placeholder {
        color: #666;
        font-weight: 300;
      }
    }
  }
`;
const TypesSection = styled.section``;
const NumberPadSection = styled.section``;

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>

      <NotesSection>
        <label>
          <input type='text' placeholder='请输入备注信息...' />
        </label>
      </NotesSection>

      <TypesSection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </TypesSection>

      <NumberPadSection>
        <div>
          <span>金额</span>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清零</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>保存</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;
