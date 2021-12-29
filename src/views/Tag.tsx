import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {Button} from 'components/Button';

const Title = styled.div`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
`;

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Title>
        <Icon name='left' />
        <span>编辑标签</span>
      </Title>
      <div>
        <label>
          <span>标签名</span>
          <input type='text' placeholder='标签名' />
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export {Tag};
