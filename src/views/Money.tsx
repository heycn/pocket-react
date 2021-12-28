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

  return (
    <MyLayout>
      <TypesSection
        value={selected.type}
        onChange={(type) => {
          setSelected({
            ...selected,
            type: type
          });
        }}
      />

      <TagsSection
        value={selected.tags}
        onChange={(tags) =>
          setSelected({
            ...selected,
            tags: tags
          })
        }
      />

      <NoteSection
        value={selected.note}
        onChange={(note) => {
          setSelected({
            ...selected,
            note: note
          });
        }}
      />

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => {
          setSelected({
            ...selected,
            amount: amount
          });
        }}
        onSave={() => {}}
      />
    </MyLayout>
  );
}

export default Money;
