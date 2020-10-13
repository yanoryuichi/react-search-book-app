
class Search extends React.Component {
    render() {
        return (
            <div>
                <h1>Search</h1>
                <form>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));