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
      margin-right: 12px;
      white-space: nowrap;
      font-size: 18px;
      color: #333;
    }
    input {
      width: 100%;
      background: none;
      font-size: 18px;
      /* color: #666; */
      height: 48px;
      border: none;
      border-radius: 0;
      font-weight: 300;
    }
  }
  .tips {
    padding-top: 8px;
    text-align: center;
    color: #999;
    font-size: 16px;
    font-weight: 300;
  }
`;

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
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
          <input
            type='text'
            value={tag.name}
            onChange={(e) => {
              updateTag(tag.id, {name: e.target.value});
            }}
          />
        </label>
        <div className='tips'>点击修改标签名</div>
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
