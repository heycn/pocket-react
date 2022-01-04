/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';
import Icon from 'components/Icon';
import img from 'images/qrcode.png';
import {Center} from 'components/Center';

const Wrapper = styled.div`
  height: 100vh;
  background: #06f;
  display: flex;
  justify-content: center;
  border: 5px solid red;
  .title {
    color: #ededed;
    font-size: 40px;
    font-weight: 200;
    padding-bottom: 56px;
    border: 1px solid red;
  }
  .qrCode {
    border: 1px solid red;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ededed;
    font-weight: 200;
    font-size: 16px;
    img {
      width: 10em;
      height: 10em;
    }
    span {
      padding-top: 18px;
    }
  }
  .middle {
    border: 1px solid red;

    padding-top: 40px;

    display: flex;
    align-items: center;
    color: #ededed;
    font-size: 40px;
    font-weight: 200;
    .icon {
      margin-right: 8px;
      fill: #ededed;
      width: 1.1em;
      height: 1.1em;
    }
  }
  .tips {
    border: 1px solid red;

    margin-top: 64px;
    color: #ededed;
    font-weight: 200;
    font-size: 16px;
  }
`;

const onClick = () => {
  return (window.location.href = 'https://heycn.github.io/pocket-react-website/#/money');
};

function Start() {
  return (
    <Wrapper onClick={onClick}>
      <Center>
        <div className='title'>简约 快速 好用</div>
        <div className='qrCode'>
          <img src={img} />
          <span>手机微信扫码浏览效果更佳哟~</span>
        </div>
        <div className='middle'>
          <Icon name='logo' /> 口袋记账
        </div>
        <div className='tips'>点击任意处开启记账...</div>
      </Center>
    </Wrapper>
  );
}

export default Start;
