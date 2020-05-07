import React from 'react';
import {Link} from 'react-router-dom';

import style from './Navi.module.css';
import cx from 'classname';

function App() {
  return (
    <div>
        <nav >
            
                <div className={style.naviItem}>
                    <Link to="/" exact>
                        <h3>10 Pantry Raids</h3>
                    </Link>
                </div>
            

                <div className={style.navBuffer}></div>
            
                <div className={style.naviItem}>
                    <p>Search Bar</p>
                </div>
            
            
                <div className={cx(style.naviItem, style.about)}>
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                </div>
            
        </nav>
        <div className={style.navHeightBuffer} />
    </div>
  );
}

export default App;
