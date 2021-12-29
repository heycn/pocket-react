// 封装一个自定义 Hook

import React from 'react';

const useTags = () => {
  const [tags, setTags] = React.useState<{id: number; name: string}[]>([
    {id: 1, name: '衣'},
    {id: 2, name: '食'},
    {id: 3, name: '住'},
    {id: 4, name: '行'}
  ]);
  return {tags, setTags};
};

export {useTags};
