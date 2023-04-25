import './App.css';
import Folowing from '~/pages/Folowing';
import Home from '~/pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flowing" element={<Folowing />} />
            </Routes>
        </div>
    );
}

export default App;
