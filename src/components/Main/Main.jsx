import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';

export const Main = (props) => (
  <main className={style.main}>
    <Layout>Главная страница</Layout>
  </main>
);
