import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Section from "./Section";
export default function App() {

    return (

        <BrowserRouter>
            <GlobalStyle />
            <NavBar />

            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/section" element={<Section />} />
            </Routes>

        </BrowserRouter>

    )
}



