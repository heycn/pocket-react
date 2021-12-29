import Layout from '../components/Layout';
import {useTags} from 'useTags';
import styled from 'styled-components';

const Title = styled.section`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <Title>标签</Title>
      <ol>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    </Layout>
  );
}

export default Tags;
