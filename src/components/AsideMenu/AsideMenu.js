import React from 'react';
import AsideMenuItem from './AsideMenuItem';

const AsideMenu = () => (
  <aside className='column is-2 is-dark'>
    <nav className='menu'>
      <ul className='menu-list'>
        <AsideMenuItem activeClassName="is-active" to='/albums' icon='fa-folder' name='albums' />
        <AsideMenuItem to='/albums/new' icon='fa-plus' name='new album' />
      </ul>
    </nav>
  </aside>
);

export default AsideMenu;
