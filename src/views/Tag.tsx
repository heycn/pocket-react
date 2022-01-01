import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useTags} from 'hooks/useTags';
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
    width: 1em;
    height: 1em;
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
      font-weight: 400;
    }
    input {
      width: 100%;
      background: none;
      font-size: 18px;
      color: #333;
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

const Deleted = styled.div`
  text-align: center;
  font-size: 20px;
  color: #666;
  font-weight: 200;
`;

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: {id: number; name: string}) => (
    <div>
      <Wrapper>
        <label>
          <span>标签名：</span>
          <input
            type='text'
            value={tag.name}
            onChange={e => {
              updateTag(tag.id, {name: e.target.value});
            }}
          />
        </label>
        <div className='tips'>点击修改标签名</div>
      </Wrapper>
      <Space />
      <Space />
      <Center>
        <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };

  return (
    <Layout>
      <Topbar>
        <Icon name='left' onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>

      {tag ? (
        tagContent(tag)
      ) : (
        <Deleted>
          <Space />
          <Space />
          <Space />
          标签已被删除
          <Space />
          <div>请返回</div>
        </Deleted>
      )}
    </Layout>
  );
};

export {Tag};
