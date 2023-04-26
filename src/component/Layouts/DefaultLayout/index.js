import Header from '~/component/Layouts/components/Header';
import Sidebar from './Sidebar';

function index({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default index;
