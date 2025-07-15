import { useParams } from 'react-router-dom';
import './articleDetail.css';
import { getAll, getOne, postData } from '../../services/api';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaTags, FaUser, FaCalendar } from 'react-icons/fa';
import Comment from './comment';

function ArticleDetailMain() {


    const [formData, setFormData] = useState({
        comment: ''
    });

    const [article, setArticle] = useState(null);
const [comments, setComments] = useState([]);
const { id } = useParams(); // 👈 extract article ID from URL



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await postData('/comments', { ...formData, articleId: id });
          setFormData({ comment: '' }); // ✅ clear textarea
          fetchComments(); // ✅ reload comments
        } catch (error) {
          console.error('Failed to post comment:', error);
        }
      };
      


    useEffect(() => {
        if (id) {
          fetchArticle();
          fetchComments();
        }
      }, [id]);
      
      const fetchArticle = async () => {
        try {
          const data = await getOne('/articles',id);
          setArticle(data);
        } catch (error) {
          console.error('Error fetching article:', error);
        }
      };
      
      const fetchComments = async () => {
        try {
          const data = await getAll(`/comments?articleId=${id}`);
          setComments(data);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      };
      




    return (

        <div className='signup-container-ariticle-detail'>

            <div className='article-detail-container'>
                <div>{article?.title}</div>
                <div className='category-date-user-container'>
                    <div className='category-container'>
                        <div >
                            <FaTags style={{ color: 'white', fontSize: '15px' }} />
                        </div>
                        <div>
                            Html
                        </div>

                    </div>
                    <div className='category-container'>
                        <div>
                            <FaUser style={{ color: 'white', fontSize: '15px' }} />
                        </div>
                        <div>
                            Admin
                        </div>

                    </div>
                    <div className='category-container'>
                        <div>
                            <FaCalendar style={{ color: 'white', fontSize: '15px' }} />
                        </div>
                        <div>
                            01 Nov,2025
                        </div>

                    </div>

                </div>
                <div className='article-image-container'>
                    <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${article?.image}`} alt='profile picture' />
                </div>
                <div>
                    <p>
                    {article?.description}
                    </p>
                </div>


            </div>
            <form onSubmit={handleSubmit} className='login'>

                <div className='signup-box-comment'>
                    <div className='signup-header'>
                        Comments
                    </div>
                    <div className='input-group-comment'>
                        <div className='input-label-comment'>Comment</div>
                        <div className='input-wrapper-comment'>
                            <textarea
                                type="text"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                                className="input-field-comment"
                            />
                        </div>
                    </div>
                    <div className='button-container-comment'>
                            <button type="submit" className='signup-button-comment'>Submit Comment</button>
                    </div>
                </div>
            </form>
            <div className='comments-cotainer'>
  {comments.map((c) => (
    <Comment key={c._id} comment={c} />
  ))}
</div>

        </div>
    );
}

export default ArticleDetailMain;
