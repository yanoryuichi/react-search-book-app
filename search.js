
class Search extends React.Component {
    search(evt) {
        evt.preventDefault();
        const form = evt.target;
        alert(form.book.value);
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <form onSubmit={this.search}>
                    <input name="book" type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));