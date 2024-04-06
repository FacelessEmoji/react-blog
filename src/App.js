import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import './assets/styles/index.css';

export default function App() {
    return (
        <div>
            <Header/>
            <div className="main-container">
                <Main/>
                <Aside/>
            </div>
            <Footer/>
        </div>
    );
}

