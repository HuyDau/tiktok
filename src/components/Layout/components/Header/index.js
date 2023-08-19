import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Logo Tiktok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search account and videos" spellCheck={false} />
          <button className={cx('clear-btn')}>{/* Clear */}</button>
          <button className={cx('search-btn')}>{/**Search */}</button>
          {/** Loading */}
        </div>
        {/*Search*/}
      </div>
    </header>
  );
}

export default Header;
