// import Header from './Header';
// import Nav from './Nav';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <h1>HelpDesk - портал для изучения web - разработки</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/async">Asynk</Link>
            <Link to="/async/promise">promise</Link>
            <h2>Тема</h2>
            <Outlet />
            <h2>Подвал!</h2>
        </div>
    )
}

export default Layout