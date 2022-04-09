// Dependencies
import {Route, Routes} from "react-router-dom";

// Components and pages
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'

export default function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stocks" element={<Dashboard/>}/>
                <Route path="/stocks/:symbol" element={<Stock testPass={'This passes on the route directly'}/>}/>
            </Routes>
        </div>
    )
}