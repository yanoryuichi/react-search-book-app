
class Search extends React.Component {
    async search(evt) {
        evt.preventDefault();
        const form = evt.target;
        const book = form.book.value;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${book}`
        const response = await fetch(url);
        const data = await response.json();
        data.items.map((item => {
            const id = item.id;
            const title = item.volumeInfo.title;
            const image = item.volumeInfo.imageLinks.thumbnail;
            console.log({id, title, image});
        }));
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