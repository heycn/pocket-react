import React from 'react';
import Icon from 'components/Icon';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = React.useState('0');

  const setOutput = (output: string) => {
    if (output.length > 12) {
      output = output.slice(0, 12);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    if (text === '保存') {
      // TODO
      return;
    }
    if('0123456789.'.split('').concat(['','清零']).indexOf(text)>= 0){
      setOutput(generateOutput(text, output)) ;
    }

  return (
    <Wrapper>
      <div className='outputNode'>
        <div className='outputName'>金额</div>
        <div className='output'>{output}</div>
      </div>
      <div className='pad clearfix' onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          {/* 删除 */}
          <Icon name='delete' />
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清零</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>保存</button>
        <button className='zero'>0</button>
        <button>·</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};
