import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {TypesSection} from './Money/TypesSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TypesSection />

      <TagsSection />

      <NoteSection />

      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;
