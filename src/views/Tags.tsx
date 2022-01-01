import Layout from '../components/Layout';
import {useTags} from 'hooks/useTags';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

const Title = styled.div`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
  /* border-bottom: 0.5px solid rgba(0, 0, 0, 0.15); */
`;
const TagList = styled.ol`
  background: #f8f8f8;
  font-size: 18px;
  font-weight: 300;
  li {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
    line-height: 20px;
    margin-left: 16px;
    color: #333;
    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon {
      fill: #999;
      width: 16px;
      height: 16px;
    }
  }
`;

function Tags() {
  const {tags, addTag} = useTags();
  return (
    <Layout>
      <Title>标签</Title>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              {' '}
              <span className='oneLine'>{tag.name}</span>
              <Icon name='right' />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
