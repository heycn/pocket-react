// 封装一个自定义 Hook

import React, {useEffect, useRef} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

const useTags = () => {
  const [tags, setTags] = React.useState<{id: number; name: string}[]>([]);
  useEffect(() => {
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: {name: string}) => {
    setTags(tags.map((tag) => (tag.id === id ? {id, name: name} : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  return {tags, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export {useTags};
