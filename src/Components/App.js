import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Movies";

export default function App() {

    return (

        <BrowserRouter>
            <GlobalStyle />
            <NavBar />

            <Routes>
                <Route path="/" element={<Movies />} /> 
            </Routes>

        </BrowserRouter>

    )
}



