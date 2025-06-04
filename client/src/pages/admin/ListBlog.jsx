import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
const ListBlog = () => {
    const {axios} = useAppContext()
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async() => {
        try {
            const {data} = await axios.get('/api/admin/blogs')
            if(data.success) 
            setBlogs(data.blogs)
         else toast.error(data.message)
        } catch (error) {
            toast.error(error.message)

        } 
    }
    useEffect(() => {
        fetchBlogs();
    }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
        <h1>All Blogs</h1>
        <div className='relative mt-5 h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
                    <table className='text-sm text-gray-500 w-full'>
                        <thead className='text-xs text-gray-600 uppercase'>
                            <tr>
                                <th scope='col' className='px-2 py-4 text-left'>#</th>
                                <th scope='col' className='px-2 py-4 text-left'>Blog Title</th>
                                <th scope='col' className='px-2 py-4 text-left max-sm:hidden'>Date</th>
                                <th scope='col' className='px-2 py-4 text-left max-sm:hidden'>Status</th>
                                <th scope='col' className='px-2 py-4 text-left'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog, index) => {
                                return <BlogTableItem key = {blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1} />}
                            )}
                        </tbody>
                    </table>


                </div>

    </div>
  )
}

export default ListBlog