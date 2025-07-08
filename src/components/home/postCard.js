import './postCard.css';

function PostCard(props) {
        const {
        imageSrc,
        title,
        category,
        author,
        date,
        description,
    } = props;

    return (



        <div className='post-main-content'>
            <div className='post-image-wrapper'>
                {/* <img className='post-image' src="/images/post-format.jpg" alt="logo" /> */}
                <img className='post-image' src={imageSrc} alt="logo" />

            </div>

            <div className='post-text-section'>
                <div className='post-description'>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
                    {title}

                </div>

                <div className='post-details-grid'>

                    <div className='post-detail-column'>
                        <div className='post-detail-box'>
                            <i class="fa fa-tags" aria-hidden="true"></i>
                        </div>
                        <div className='post-detail-box'>
                            {/* Php */}
                            {category}

                        </div>
                    </div>

                    <div className='post-detail-column'>
                        <div className='post-detail-box'>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className='post-detail-box'>
                            {/* Admin */}
                            {author}

                        </div>
                    </div>

                    <div className='post-detail-column'>
                        <div className='post-detail-box'>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div className='post-detail-box'>
                            {/* 01 Nov, 2025 */}
                            {date}

                        </div>
                    </div>

                </div>

                <div className='post-footer-left'>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.... */}
                    {description}

                </div>

                <div className='post-footer-right'>
                    <div className='post-footer-right-read-more'>
                        Read More
                    </div>
                </div>
            </div>
        </div>



    );
}

export default PostCard;

