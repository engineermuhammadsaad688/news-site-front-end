import './articleDetail.css';

function Comment({ comment }) {
  return (
    <div className='comment'>
      <div className='comment-image-container'>
        <div className='comment-image'>
          <img src='/images/dubai.png' alt='profile' />
        </div>
      </div>

      <div className='comment-user-name'>
        {comment?.userId?.name || 'Anonymous'}
      </div>

      <div className='comment-text'>
        {comment.comment}
      </div>

      <div className='comment-date'>
        Posted on {new Date(comment.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}

export default Comment;
