import React from 'react';

import MainBox01 from '../main/MainBox01';
import AsideBlock01 from '../main/aside/AsideBlock01';
import AsideBlock02 from '../main/aside/AsideBlock02';
import AsideBlock03 from '../main/aside/AsideBlock03';
import AsideBlock04 from '../main/aside/AsideBlock04';
import MainBox03 from '../main/MainBox03';
import MainBox04 from '../main/MainBox04';
import MainBox05 from '../main/MainBox05';
import MainBox02 from '../main/MainBox02/MainBox02'

function MainBP() {
  return (
     <>
      <main className="App">
        <MainBox01 />
        <MainBox02 />
      </main>

      {/* These are full-width white background blocks */}
      <AsideBlock01 />
      <AsideBlock02 />
      <AsideBlock03 />
      <AsideBlock04 />

      <div className="man">
        <MainBox03 />
        <MainBox04 />
        <MainBox05 />
      </div>
    </>
  );
}

export default MainBP;
