// 导航栏

import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
require('icons/money.svg');
require('icons/tags.svg');
require('icons/chart.svg');

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
      padding: 6px 0;
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
          <svg className='icon'>
            <use xlinkHref='#tags' />
          </svg>
        </Link>
        <Link to='/money' className='link'>
          <svg className='icon'>
            <use xlinkHref='#money' />
          </svg>
        </Link>

        <Link to='/statistics' className='link'>
          <svg className='icon'>
            <use xlinkHref='#chart' />
          </svg>
        </Link>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
