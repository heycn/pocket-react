import React from 'react';

const useTags = () => {
  const [tags, setTags] = React.useState<string[]>(['衣', '食', '住', '行']);
  return {
    tags,
    setTags
  };
};

export {useTags};
