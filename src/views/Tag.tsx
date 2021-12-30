import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import styled from 'styled-components';
import {Button} from 'components/Button';
import {Space} from 'components/Space';
import {Center} from 'components/Center';

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 14px 18px;
  font-size: 20px;
  .icon {
    fill: #333;
    width: 1.2em;
    height: 1.2em;
  }
`;

const Wrapper = styled.section`
  label {
    padding-left: 24px;
    display: flex;
    align-items: center;
    background: #fff;
    span {
      margin-right: 24px;
      white-space: nowrap;
      font-size: 18px;
      color: #333;
    }
    input {
      width: 100%;
      background: none;
      font-size: 18px;
      color: #666;
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

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name='left' />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <Space />
      <Wrapper>
        <label>
          <span>标签名：</span>
          <input type='text' placeholder='修改标签名' value={tag.name} />
        </label>
      </Wrapper>
      <Space />
      <Space />
      <Space />
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {Tag};
