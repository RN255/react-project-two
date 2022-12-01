import hotelOne from "../images/hotelOne.jpg";
import hotelTwo from "../images/hotelTwo.jpg";
import hotelThree from "../images/hotelThree.jpg";
import star from "../images/star.png";
import emptyStar from "../images/emptyStar.png";

export default function PlanStaycation() {
  return (
    <>
      <div id="planStaycationContainer">
        <div id="planStaycation">
          <h2>Plan your next staycation</h2>
          <div id="hotelContainer">
            <div className="hotelCard">
              <img src={hotelOne}></img>
              <h3>Ten Hill Place</h3>
              <div className="reviewDiv">
                <div className="starDiv">
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={emptyStar} className="emptyStar"></img>
                </div>
                <p>
                  £104<span>Per night</span>
                </p>
              </div>
            </div>
            <div className="hotelCard">
              <img src={hotelTwo}></img>
              <h3>Point A Edinburgh</h3>
              <div className="reviewDiv">
                <div className="starDiv">
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={emptyStar} className="emptyStar"></img>
                  <img src={emptyStar} className="emptyStar"></img>
                </div>
                <p>
                  £176<span>Per night</span>
                </p>
              </div>
            </div>
            <div className="hotelCard">
              <img src={hotelThree}></img>
              <h3>Yotel Edinburgh</h3>
              <div className="reviewDiv">
                <div className="starDiv">
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={star} className="star"></img>
                  <img src={emptyStar} className="emptyStar"></img>
                </div>
                <p>
                  £289<span>Per night</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
