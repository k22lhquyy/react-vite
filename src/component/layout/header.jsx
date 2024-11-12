import "./header.css"

const Header = () => {
    return (
        <ul>
            <li><a class="active" href="/">Home</a></li>
            <li><a href="/user">News</a></li>
            <li><a href="/login">Contact</a></li>
            <li><a href="/project">About</a></li>
        </ul>
    )
}

export default Header;