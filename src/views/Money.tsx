import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {TypesSection} from './Money/TypesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useState} from 'react';
import {useRecords} from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

// 声明类型
type Type = '-' | '+';

const defaultFormData = {
  tagsIds: [] as number[],
  note: '',
  type: '-' as Type,
  amount: 0
};

function Money() {
  // 被选中的对象
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout>
      <TypesSection value={selected.type} onChange={(type) => onChange({type})} />
      <TagsSection value={selected.tagsIds} onChange={(tagsIds) => onChange({tagsIds})} />
      <NoteSection value={selected.note} onChange={(note) => onChange({note})} />
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onSave={submit} />
    </MyLayout>
  );
}

export default Money;
