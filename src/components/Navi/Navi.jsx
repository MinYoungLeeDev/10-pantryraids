import React from 'react';
import style from './Navi.module.css';


function App() {
  return (
    <div>
      <nav >
        <div className={style.naviItem}>
          <h3>10 Pantry Raids</h3>
        </div>
        <div className={style.navBuffer}></div>
        <div className={style.naviItem}>
          <p>Space Holder</p>
        </div>
      </nav><br />
      <div className={style.navHeightBuffer} />
    </div>
  );
}
export default App;
