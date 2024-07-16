import React from "react";

const Image = () => {
  return (
    <>
      <div className="text-center">
        <h2>
          Welcome to our gallery, where you can explore the vibrant life, <br />
          achievements, and spirit of our Institute through a collection of
          captivating images.
        </h2>
      </div>

      <div className="card-group">
        <div className="card popup-gallery">
          <div className="image">
            <a href="assets/image/img1.jfif">
              <img src="assets/image/img1.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img2.jfif">
              <img src="assets/image/img2.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img3.jfif">
              <img src="assets/image/img3.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img4.jfif">
              <img src="assets/image/img4.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img5.jfif">
              <img src="assets/image/img5.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img6.jfif">
              <img src="assets/image/img6.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img7.jfif">
              <img src="assets/image/img7.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img8.jfif">
              <img src="assets/image/img8.jfif" />
            </a>
          </div>
          <div className="image">
            <a href="assets/image/img9.jfif">
              <img src="assets/image/img9.jfif" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
