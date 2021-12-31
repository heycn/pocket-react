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

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  margin-left: 16px;
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
  padding: 12px 16px 12px 0;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  font-weight: 200;

  }
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
            <Item>
              <div className='tags'>
                {r.tagsIds.map((tagId) => (
                  <span>{getName(tagId)}</span>
                ))}
              </div>

              {r.note && <div className='note'>{r.note}</div>}

              <div className='amount'>￥{r.amount}</div>

              {/* {day(r.createAt).format('YYYY年MM月DD日')} */}
            </Item>
          );
        })}
      </div>
    </Layout>
  );
}
export default Statistics;
