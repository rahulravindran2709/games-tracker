import React from 'react';

const GameDetailsBanner = props => (<div className="game-details__banner">
  <div className="game-details__banner__header">
    <div className="mui-container">
      <div className="mui-row">
        <div className="mui-col-md-6">
          <h1>Storm blade</h1>
        </div>
        <div className="game-details__ratings">
          <div className="mui-col-md-1">
            <h1>
              <a title="By PEGI, extrahiert von StG1990 [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3APEGI_18.svg">
                <img width={16} alt="PEGI 18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PEGI_18.svg/16px-PEGI_18.svg.png" />
              </a>
              <a title="By Entertainment Software Association (Personal correspondence) [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AESRB_2013_Rating_Pending.svg">
                <img width={16} alt="ESRB 2013 Rating Pending" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ESRB_2013_Rating_Pending.svg/16px-ESRB_2013_Rating_Pending.svg.png" /></a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="game-details__meta">
    <div className="mui-container-fluid">
      <div className="mui-row">
        <div className="mui-col-md-3" />
        <div className="mui-col-md-3">
          <div className="game-details__meta__user-rating">
            <span className="stars">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </span>
            <span className="ratings-text">
                      4.1/5 <span className="reviews-number">(33 reviews)</span>
            </span>
          </div>
        </div>
        <div className="mui-col-md-3">
          <div className="game-details__meta__release-date">
            <span>Released 19th July, 2017</span>
          </div>
        </div>
      </div>
      <div className="game-details__meta__user-meta">
        <div className="mui-row">
          <div className="mui-col-md-3">
            <div className="game-details__meta__user-meta__last-played">
              <h3>Last played 27th January, 2017</h3>
            </div>
          </div>
          <div className="mui-col-md-3">
            <div className="game-details__meta__user-meta__hours_played">
              <h3>15 hours spent</h3>
            </div>
          </div>
          <div className="mui-col-md-3">
            <div className="game-details__meta__user-meta__playthroughs">
              <h3>1 completed playthrough</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="game-details__actions">
    <button className="mui-btn mui-btn--fab mui-btn--primary">+</button>
  </div>
</div>);

export default GameDetailsBanner;
