import {useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const handleDelete = (id) => {
        const newBLogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBLogs);
    }

    const [blogs, setBlogs] = useState(null);
      useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then((data) => {
          console.log(da)
        })
      })

    return ( 
        <div className="home">
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" /> */}
        </div>
     );
}
 
export default Home;