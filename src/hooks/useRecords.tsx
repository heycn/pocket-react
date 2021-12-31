import {useState, useEffect} from 'react';
import {useUpdate} from 'hooks/useUpdate';

type RecordItem = {
  tagsIds: number[];
  note: string;
  type: '+' | '-';
  amount: number;
  createAt: string;
};

type newRecordItem = Omit<RecordItem, 'createAt'>;

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagsIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createAt: new Date().toISOString()};
    setRecords([...records, record]);
    return true;
  };

  return {records, addRecord};
};
