import gtd_logo from "../src/Images/gtd_logo.png";
import img_hero from "../src/Images/img_hero.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={gtd_logo} alt="" />
      </div>
      <div className="main-display">
        <img src={img_hero} alt="" className="sub" />
        <span className="display">Hello, we’re gtd.</span>
      </div>
      <div>
        <p className="container" >How it started</p>
        <span className="main-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris n isi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
          ulpa qui officia deserunt mollit anim id est laborum.
        </span>
        
      </div>
    
     <footer className="footer">
     
      <div className="footer-container">
    
        <div className="row">
       
          <div className="footer-col">
            <h4>Team</h4>
            <ul>Lisa</ul>
            <ul>Danielle</ul>
            <ul>Brain</ul>
          </div>
          <div className="footer-col">
            <h4>Learn More</h4>
            <ul>Mainfesto</ul>
            <ul>works</ul>
            <ul>stories</ul>
          </div>
          <div className="footer-col">
            <h4>Meet Us</h4>
            <ul>Studio</ul>
            <ul>Community</ul>
            <ul>Workshops</ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>Twitter</ul>
            <ul>Facebook</ul>
            <ul>Instagram</ul>
          </div>
        </div>

      </div>
    </footer>
    </div>
  );
}

export default App;
