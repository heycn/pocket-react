import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {TypesSection} from './Money/TypesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import React from 'react';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

// 声明类型
type Type = '-' | '+';

function Money() {
  // 被选中的对象
  const [selected, setSelected] = React.useState({
    tags: [] as string[],
    note: '',
    type: '' as Type,
    amount: 0
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };

  return (
    <MyLayout>
      <TypesSection value={selected.type} onChange={(type) => onChange({type})} />

      <TagsSection value={selected.tags} onChange={(tags) => onChange({tags})} />

      <NoteSection value={selected.note} onChange={(note) => onChange({note})} />

      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onSave={() => {}} />
    </MyLayout>
  );
}

export default Money;
