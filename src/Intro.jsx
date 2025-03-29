import Portim from './assets/portim.png'


function Intro() {
    return (
      <>
      <div className="intro">
          <div className="intro-image">
              <img alt="me" src={Portim}/>
          </div>
          <div className="intro-text">
              <h1>
                  <span className="anim">W</span>
                  <span className="anim">E</span>
                  <span className="anim">L</span>
                  <span className="anim">C</span>
                  <span className="anim">O</span>
                  <span className="anim">M</span>
                  <span className="anim">E</span>
                  <span className="anim">!</span>
                  <span> </span>

                  My name is Emmanuel, and this is my little space</h1></div>
      </div>
      </>
    );
}

export default Intro;