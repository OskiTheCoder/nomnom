import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main className='main-container'>
      <div className='main-container__header'>
        <h1 className='main-container__header--heading'>
          Finally. A modern way to share, upload, and discover new recipes.
        </h1>
        <p className='main-container__header--paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          mollitia incidunt obcaecati minima atque enim quaerat velit ratione
          quidem impedit recusandae corrupti neque at natus suscipit, odit
          numquam?
        </p>
        <button className='main-container__header--explore-button'>
          Explore
        </button>
      </div>
      <div className='main-container__img'></div>
    </main>
  );
};

export default Main;
