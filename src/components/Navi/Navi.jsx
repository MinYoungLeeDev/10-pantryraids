import React from 'react';
import {Link} from 'react-router-dom';

import style from './Navi.module.css';
import cx from 'classname';

function App() {
  return (
    <div>
        <nav >
            <Link to="#">
                <div className={style.naviItem}>
                    <h3>10 Pantry Raids</h3>
                </div>
            </Link>
                <div className={style.navBuffer}></div>
            
                <div className={style.naviItem}>
                    <p>Search Bar</p>
                </div>
            
            <Link to="#">
                <div className={cx(style.naviItem, style.about)}>
                    <p>About</p>
                </div>
            </Link>
        </nav>
        <div className={style.navHeightBuffer} />
    </div>
  );
}

export default App;
