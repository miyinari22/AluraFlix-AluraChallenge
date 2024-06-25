import FooterBar from "../components/FooterBar/FooterBar.jsx";
import Header from "../components/Header/Header.jsx";
import Home from "../pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewVideo from "../pages/VideoNuevo/VideoNuevo.jsx";
import { VideoProvider } from "../context/VideoContext.jsx";
import Footer from "../components/Footer/Footer.jsx";
import './AppRoutes.css';

function AppRoutes() {
    return (
        <VideoProvider>
            <BrowserRouter>
                <div className="app-container">
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route index element={<Home />}></Route>
                            <Route path="newVideo" element={<NewVideo />}></Route>
                        </Routes>
                    </div>
                    <FooterBar />
                    <Footer />
                </div>
            </BrowserRouter>
        </VideoProvider>
    );
}

export default AppRoutes;