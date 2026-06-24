import { useState } from "react";
import "./App.css";
import PhotoFlip from "./components/photoflip";
import { LEAF_SVG } from "./assets/constants";

export default function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 3) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const LEAF1 = LEAF_SVG('#A4CE8B');
  const LEAF2 = LEAF_SVG('#2D3319');

  return (
    <div className="app">
      <div
        className="slider"
        style={{ transform: `translateX(-${page * 100}vw)` }}
      >
        {/* Page 1 */}
        <section className="slide statement">
          <div className="plant" dangerouslySetInnerHTML={{ __html:LEAF1}} style={{marginRight: '15%', rotate: '-15deg', bottom: 100}}> 
          </div>
          <div className="plant" dangerouslySetInnerHTML={{ __html:LEAF1}} style={{marginLeft: '15%', rotate: '15deg', bottom: 100}}> 
          </div>
          <div className="plant" dangerouslySetInnerHTML={{ __html:LEAF2}} style={{marginRight: '12%', rotate: '-15deg', bottom: 50}}> 
          </div>
          <div className="plant" dangerouslySetInnerHTML={{ __html:LEAF2}} style={{marginLeft: '12%', rotate: '15deg', bottom: 50}}> 
          </div>
          <div style={{display: 'flex', color: '#1f0d0d', zIndex: 1}}>
            <h1 style={{fontFamily: '"Playwrite AU TAS", cursive', marginBottom: '0.2em'}}>Happy Birthday</h1> 
            <h1 className="birthday-number" style={{fontFamily: '"Playwrite AU TAS", cursive'}}>25th</h1>
            <h1>🎉</h1>
          </div>
          <p style={{color: '#1f0d0d', zIndex: 1}}>
            Today is all about celebrating someone truly special.
          </p>
        </section>

        {/* Page 2 */}
        <section className="slide photo">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 style={{color: 'white', flex: 1, fontFamily: '"Playwrite AU TAS", cursive'}}>Look what you've achieved from last year until today</h1>
          <PhotoFlip />
          <h1 style={{color: 'white', flex: 1, fontFamily: '"Playwrite AU TAS", cursive', fontSize: 43}}>So Proud of You!</h1>
          </div>
        </section>

        {/* Page 3 */}
        <section className="slide message">
          <h2 style={{marginBottom: '1em', color: '#3e6129',  fontFamily: '"Playwrite AU TAS", cursive'}}>A Little Message 💌</h2>
          <p className="letter">
            Thank you for bringing joy, kindness, and laughter into the lives
            of me around you. Wishing you endless happiness and success.

            <br></br>
            <br></br>

            ( Actually i am sorry for make this not properly, i really focus on making these and forgot how to make the message. for more on call :D )
          </p>
        </section>

        {/* Page 4 */}
        <section className="slide wishlist">
          <h2 style={{marginBottom: '1em', color: '#122122', fontFamily: '"Playwrite AU TAS", cursive'}}>Your Wishlist ✨</h2>

          <form className="wishlist-form">
            <input
              type="text"
              placeholder="What do you wish for?"
            />
            <textarea
              placeholder="Tell me more..."
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>

      <div className="controls">
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>

        <button onClick={nextPage} disabled={page === 3}>
          Next
        </button>
      </div>
    </div>
  );
}