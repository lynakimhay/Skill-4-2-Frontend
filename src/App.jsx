import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Table from './components/Table';
// import Farmlandtable from './components/Farmlandtable';

function Root() {
  return (
    <>
      <Sidebar />
      <div id="detail">
      <Header></Header>
        <Outlet />
        {/* <Table/>
        <Farmlandtable/> */}
      </div>
    </>
  );
}
export default Root;