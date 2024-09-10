import React from 'react';
import '../../styles/Home/Blog.css';

// Імпортуємо зображення
import Blog1 from '../../image/arabic-businessman-standing-on-street-and-using-laptop-9623794.svg';
import Blog2 from '../../image/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.svg';
import Blog3 from '../../image/apple-monitors-326518.svg';

const Blog = () => {
    const blogPosts = [
        {
            imgSrc: Blog1,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            text: 'See how pivoting to Webflow changed one person\'s sales strategy and allowed him to attract',
        },
        {
            imgSrc: Blog2,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            text: 'See how pivoting to Webflow changed one person\'s sales strategy and allowed him to attract',
        },
        {
            imgSrc: Blog3,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            text: 'See how pivoting to Webflow changed one person\'s sales strategy and allowed him to attract',
        },
    ];

    return (
        <section id="blog">
            <h2>Our blog</h2>
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <div className="blog-post" key={index}>
                        <img src={post.imgSrc} alt={`Blog post ${index + 1}`} />
                        <p className="date">{post.date}</p>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
