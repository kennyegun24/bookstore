import './home.css'

const Book = ({title, author}) => (
  <section className='sec'>
  <p>{title}</p>
  <p>{author}</p>
  <button>Remove</button>
  </section>
)

export default Book