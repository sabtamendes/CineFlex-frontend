import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Sections from "./Sections";
import Seats from "./Seats";
export default function App() {

    return (

        <BrowserRouter>
            <GlobalStyle />
            <NavBar />

            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sections/:id" element={<Sections />} />
                <Route path="/seats:id" element={<Seats />} />
            </Routes>

        </BrowserRouter>

    )
}



