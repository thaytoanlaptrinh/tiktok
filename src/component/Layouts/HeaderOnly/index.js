import Header from '~/component/Layouts/components/Header';

function index({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default index;
