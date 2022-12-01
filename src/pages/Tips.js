import travelHacksBackground from "../images/travelHacksBackground.webp";
import Footer from "./Footer";

export default function Tips() {
  return (
    <>
      <div id="tips">
        <div id="tipsTitleSection">
          <h1>How to find great flight deals</h1>
          <p>8th November 2022 by Mark Hobbs</p>
        </div>
        <img src={travelHacksBackground} alt=""></img>
        <p>
          Finding great flight deals always feels good, especially now that
          budgets are tighter. But it’s not all down to good luck. There’s an
          art to always getting the best prices. Find out how to make the most
          of our money-saving tools, along with some data-backed tips.
        </p>
        <p>
          When it comes to finding great flight deals, the travelsphere is
          packed with complicated strategies and easy-to-debunk myths. It’s time
          to cut through the nonsense. We’re looking at actual data to show you
          what really works. Ready to always grab a bargain? Let’s go.
        </p>
        <hr></hr>
        <ul>
          <li>
            <h3>
              First things first: understand the science behind flight pricing
            </h3>
            <p>
              Most airlines price their flights dynamically, so prices can
              change from day to day or even hour to hour. Airlines look at
              affordability, demand, availability and lots of other factors when
              pricing their flights. But there is a pattern to it. Superflight’s
              travel nerds (data experts), have found flight tickets tend to
              follow a weekly cycle. Prices are usually lower earlier in the
              week.
            </p>
          </li>
          <li>
            <h3>Score great flight deals during sales</h3>
            <p>
              While there are great deals to be found all year long, this is
              when flights are likely to go on sale: Black Friday (Friday 25
              November 2022), Cyber Monday (Monday 28 November 2022), Boxing Day
              (December 26).
            </p>
          </li>
          <li>
            <h3>Find great flight deals with Superflight features</h3>
            <p>
              Delete your flight spreadsheets and browser bookmarks. The
              Superflight website and Superflight app make it easy to find the
              best deals, no matter where you’re going.
            </p>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
}
