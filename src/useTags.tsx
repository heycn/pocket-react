// 封装一个自定义 Hook

import React from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

const useTags = () => {
  const [tags, setTags] = React.useState<{id: number; name: string}[]>(defaultTags);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  return {tags, setTags, findTag};
};

export {useTags};
