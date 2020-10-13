
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
        this.search = this.search.bind(this);
    }

    async search(evt) {
        evt.preventDefault();
        const form = evt.target;
        const book = form.book.value;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${book}`
        const response = await fetch(url);
        const data = await response.json();
        const books = [];
        data.items.map((item => {
            const id = item.id;
            const title = item.volumeInfo.title;
            const image = item.volumeInfo.imageLinks.thumbnail;
            books.push({ id, title, image });
        }));
        this.setState({ books: books });
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <form onSubmit={this.search}>
                    <input name="book" type="text" />
                    <button type="submit">Search</button>
                </form>
                <div>
                    {
                        this.state.books.map((book) => {
                            return (
                            <div key={book.id}>
                                <h2>{book.title}</h2>
                                <img src={book.image}/>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));