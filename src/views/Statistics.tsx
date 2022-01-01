import {ReactNode, useState} from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import {TypesSection} from './Money/TypesSection';
import {useRecords, RecordItem} from '../hooks/useRecords';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';

const Title = styled.div`
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
  /* border-bottom: 0.5px solid rgba(0, 0, 0, 0.15); */
`;

const ItemWrapper = styled.div`
  background: #f8f8f8;
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
    color: #999;
    font-weight: 200;
  }
`;

const Header = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  color: #999;
  font-weight: 300;
`;

function Statistics() {
  const [type, setTypes] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: {[K: string]: RecordItem[]} = {};
  const selectedRecords = records.filter(r => r.type === type);

  selectedRecords.map(r => {
    const key = day(r.createAt).format('YYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <Title>统计</Title>

      <TypesSection value={type} onChange={value => setTypes(value)} />

      {array.map(([date, records]) => (
        <div>
          <Header>{date}</Header>
          <div>
            {records.map(r => {
              return (
                <ItemWrapper>
                  <Item>
                    <div className='tags oneLine'>
                      {r.tagsIds
                        .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                        .reduce((result, span. index, array) => 
                        result.concat(index<array.length-1 ? [span, '、']): [span],[] as ReactNode[])
                      }
                    </div>

                    {r.note && <div className='note'>{r.note}</div>}

                    <div className='amount'>￥{r.amount}</div>
                  </Item>
                </ItemWrapper>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}
export default Statistics;
