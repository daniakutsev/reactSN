import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>

    )
}

const Header = () => {
    return (
        <div>
            <a href="/">Home</a>
            <a href="#s">About us</a>
            <a href="#s">Contacts</a>
        </div>
    )
}
const Technologies = () => {
    return (
        <div>
            <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
