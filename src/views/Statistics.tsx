import {useState} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import {TypesSection} from './Money/TypesSection';
import {useRecords} from '../hooks/useRecords';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';

const Title = styled.div`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
`;

function Statistics() {
  const [types, setTypes] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  
  return (
    <Layout>
      <Title>统计</Title>

      <TypesSection value={types} onChange={(value) => setTypes(value)} />

      <div>
        {records.map((r) => {
          return (
            <div>
              {r.tagsIds.map((tagId) => (<span>{getName(tagId)}</span>))}
              <hr />
              {r.amount}
              <hr />
              {day(r.createAt).format('YYYY年MM月DD日')}
            </div>
              
          );
        })}
      </div>
    </Layout>
  );
}
export default Statistics;
