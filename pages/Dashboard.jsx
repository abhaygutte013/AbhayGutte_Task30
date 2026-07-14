function Dashboard(){
  return(
    <div className="page">
      <div className="left-side">
        <div className="main-card">
          <img src="/public/skateboard.jpg" alt="dashboard" />
          <div className="content">
            <h2>TITLE HEADING</h2>
            <p className="date">
              Title description, April 7, 2014
            </p>
            <p>
              Mauris neque quam, fermentum ut nisl vitae,
              convallis maximus nisl. Sed mattis nunc id
              lorem euismod placerat. Vivamus porttitor magna
              enim, ac accumsan tortor cursus at.
            </p>
            <div className="bottom">
              <button>READ MORE »</button>
              <span>
                Comments <b>0</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="profile-card">
          <img src="/public/profile.png" alt="" />
          <h3>My Name</h3>
          <p>
            Just me, myself and I, exploring the universe
            of unknownment. I have a heart of love.
          </p>
        </div>
        <div className="posts">
          <h3>Popular Posts</h3>
          <div className="post">
            <img src="/public/post1.jpg" alt="" />
            <div>
              <h4>Lorem</h4>
              <p>Sed mattis nunc</p>
            </div>
          </div>
          <div className="post">
            <img src="/public/post2.jpg" alt="" />
            <div>
              <h4>Ipsum</h4>
              <p>Praes tinci sed</p>
            </div>
          </div>
          <div className="post">
            <img src="/public/post3.jpg" alt="" />
            <div>
              <h4>Dorum</h4>
              <p>Ultricies congue</p>
            </div>
          </div>
          <div className="post">
            <img src="/public/post4.jpg" alt="" />
            <div>
              <h4>Mingsum</h4>
              <p>Lorem ipsum dipsum</p>
            </div>
          </div>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <div className="tag-list">
            <span>Travel</span>
            <span>New York</span>
            <span>London</span>
            <span>IKEA</span>
            <span>NORWAY</span>
            <span>DIY</span>
            <span>Ideas</span>
            <span>Baby</span>
            <span>Family</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;