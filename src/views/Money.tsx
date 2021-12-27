import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import {TypesSection} from './Money/TypesSection';
import {NumberPadSection} from './Money/NumberPadSection';

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
