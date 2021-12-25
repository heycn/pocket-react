// 导航栏

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    .link {
      width: 33.3333%;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px 0;
      .icon {
        width: 32px;
        height: 32px;
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
        </Link>
        <Link to='/money' className='link'>
          <Icon name='money' />
        </Link>
        <Link to='/statistics' className='link'>
          <Icon name='chart' />
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
