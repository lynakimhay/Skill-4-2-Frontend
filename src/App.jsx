import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function Root() {
  return (
    <>
      <Sidebar />
      <div id="detail">
      <Header></Header>
        <Outlet />
      </div>
    </>
  );
}
export default Root;