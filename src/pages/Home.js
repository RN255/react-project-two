import BannerOne from "./BannerOne";
import PlanStaycation from "./PlanStaycation";
import Advice from "./Advice";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section id="formSection">
        <div id="formContainer">
          <div>
            <h2>Let the journey begin</h2>
          </div>
          <div id="formDiv">
            <form>
              <label for="from">From</label>
              <input type="text" id="from" name="from" maxlength="50" />
              <br />

              <label for="to">To</label>
              <input type="text" id="to" name="to" maxlength="50" />
              <br />

              <label for="depart">Depart</label>
              <input type="date" id="depart" name="depart" />
              <br />

              <label for="return">Return</label>
              <input type="date" id="return" name="return" />
              <br />

              <label for="cars">Cabin class:</label>
              <select id="cars" name="cars">
                <option value="volvo">Economy</option>
                <option value="saab">Premium Economy</option>
                <option value="fiat">Business class</option>
                <option value="audi">First class</option>
              </select>

              <div id="buttonHolder">
                <input type="submit" value="Book flight" id="submitButton" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <BannerOne></BannerOne>
      <PlanStaycation></PlanStaycation>
      <Advice></Advice>
      <Footer></Footer>
    </>
  );
}
