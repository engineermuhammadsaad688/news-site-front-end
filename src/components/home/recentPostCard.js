import './recentPostCard.css';

function RecentPostCard({ imageSrc, description, category, date }) {


    return (



        <div className='post-right-section-recent-post-container'>
            <div className='recent-post-heading'>
                Recent Posts
            </div>
            <div className='post-card-container'>
                <div className='post-image-container'>
                    {/* <img className='post-image' src="/images/post-format.jpg" alt="logo" /> */}
                    <img className='post-image' src={imageSrc} alt="logo" />
                </div>
                <div className='post-content-container'>
                    <div className='post-decripton'>
                        description
                        {description}
                    </div>
                    <div className='post-details-container'>
                        <div className='post-category'>
                            <div className='post-category-icon'>
                                <i class="fa fa-tags" aria-hidden="true"></i>

                            </div>
                            <div className='post-category-text'>
                                {/* category */}
                                {category}

                            </div>

                        </div>
                        <div className='post-date' >
                            <div className='post-date-icon'>
                                <i class="fa fa-calendar" aria-hidden="true"></i>

                            </div>
                            <div className='post-date-text'>
                                {date}


                            </div>
                        </div>
                    </div>

                    <div className='read-more-button-container'>

                        <div className='read-more-button'>
                            Read More

                        </div>

                    </div>

                </div>
            </div>
        </div>




    );
}

export default RecentPostCard;












































