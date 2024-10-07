import React from 'react';

function PostBanner() {
  return (
    <div>
      <div className="tr-breadcrumb bg-image section-before"> 
        <div className="container"> 
          <div className="breadcrumb-info text-center"> 
            <div className="page-title"> 
              <h1>Post Your Job</h1>
            </div>
            <ol className="breadcrumb"> 
              <li><a href="index.html">Home</a></li>
              <li className="active">Job Post</li> 
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBanner;
