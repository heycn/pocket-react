// 导航栏

import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    .link {
      font-size: 12px;
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      .icon {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <Link to='/tags' className='link'>
          <Icon name='tags' />
          标签
        </Link>
        <Link to='/money' className='link'>
          <Icon name='money' />
          记账
        </Link>
        <Link to='/statistics' className='link'>
          <Icon name='chart' />
          统计
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
