import {useState, useEffect} from 'react';
import {useUpdate} from 'hooks/useUpdate';

export type RecordItem = {
  tagsIds: number[];
  note: string;
  type: '+' | '-';
  amount: number;
  createdAt: string;
};

type newRecordItem = Omit<RecordItem, 'createdAt'>;

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagsIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: new Date().toISOString()};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};
