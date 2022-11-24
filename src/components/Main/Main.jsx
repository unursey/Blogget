import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes, Navigate} from 'react-router-dom';
import Modal from '../Modal';
import Mainpage from './Mainpage';
import Errorpage from './Errorpage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='auth' element={<Navigate to='/' />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Layout>
  </main>
);
