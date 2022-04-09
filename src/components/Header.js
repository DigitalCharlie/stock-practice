import {Link} from 'react-router-dom'

import Nav from './Nav'

export default function Header() {
    return (
        <header>
            <Link to="/"><h1>iStock</h1></Link>
            <Nav />
        </header>
    )
}