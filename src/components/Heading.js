import React from 'react'
import './Heading.css'

const Heading = () => {
  const imagesrc = "https://images.unsplash.com/photo-1554388828-bb50f4238786";

  return (
    <div className="cover-photo">
        <img src={imagesrc} className="random" />
        <div className="cover-content">
          <div className="cover-heading">
            <div className="title">Unsplash</div>
            <div className="sub-text">
              Beautiful, free photos.
            </div>
            <div className="tagline">
              Gifted by the world’s most generous community of photographers. 🎁
            </div>
          </div>
          <div className="asd">
            <button className="searchButton">
              <i className="fas fa-search" />
            </button>
            <input
              className="coverSearchBox"
              type="text"
              placeholder="Search free high-resolution photos"
            />
          </div>

          <div className="trending-search">
            <span className="text">
              Trending searches:{" "}
            </span>
            <span className="trending-text">business, </span>
            <span className="trending-text">computer, </span>
            <span className="trending-text">nature, </span>
            <span className="trending-text">love, </span>
            <span className="trending-text">house </span>
          </div>
        </div>
        <div className="footer-div">
          <div className="left-div">
            <span
              className="left"
            >
              Photo of the day by
            </span>{" "}
            <a className="linkDecoration" href="/@spenas88">
              Gabriel
            </a>
          </div>
          <div className="center-div">
            <span className="highlightText">
              Read more about the{" "}
            </span>
            <span>
              <a
                className="linkDec"
                href="https://unsplash.com/license"
                target="blank"
              >
                {" "}
                Unsplash License
              </a>
            </span>
          </div>
          <div className="hide">
            Extream Right Div No Content Displayed
          </div>
        </div>
      </div>
  )
}

export default Heading