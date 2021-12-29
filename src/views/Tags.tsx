import Layout from '../components/Layout';
import {useTags} from 'useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
`;
const TagList = styled.ol`
  background: #f8f8f8;
  li {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
    margin-left: 16px;
    padding: 12px 16px 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    .icon {
      fill: #999;
      width: 16px;
      height: 16px;
    }
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  background: #06f;
  color: #fff;
  font-size: 18px;
  padding: 8px 56px;
  border-radius: 64px;
`;
const Space = styled.div`
  height: 32px;
`;
function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <Title>标签</Title>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <span className='oneLine'>{tag}</span>
            <Icon name='right' />
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
