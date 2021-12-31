import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  button {
    background: none;
    color: #06f;
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
      font-weight: 300;
      margin: 8px;
      &.selected {
        position: relative;
        background: rgba(0, 102, 255, 0.15);
        color: #06f;
        font-weight: 400;
        ::after {
          content: '';
          width: 100%;
          height: 100%;
          border: 1px solid #06f;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 16px;
        }
      }
    }
  }
`;

// 声明类型
type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果 tag 已经被选中，就复制所有没有被选中的 tag，作为新的 selectedTags
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tagId: number) => (selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '');
  return (
    <Wrapper>
      <button onClick={addTag}>新增标签</button>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTag(tag.id);
            }}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export {TagsSection};
