import './App.css';
import { useState } from 'react';

function App() {

  const [selectedLink, setSelectedLink] = useState(0)

  const list = ['About Me', 'What I Do', 'Projects', 'Connect', 'Other Interests'];

  const clickHandler = (listIndex) => {
    setSelectedLink(listIndex)
  }

  return (
    <div className="App">
    
      
      <div className="App-header">
      <div className='name'>Kavya Kumar</div>
      <div className='role'>Frontend Software Engineer</div>
      <div className='all-content'>
        <div className='nav-content'>
          <nav>
            <ul className='list'>
              {list.map((listItem, listIndex) => <li style={{ fontWeight: selectedLink === listIndex ? 800 : 500}} onClick={() => clickHandler(listIndex)}>{listItem}</li>)}
              <li><a href={require('./resume.pdf')} target="_blank">Resume</a></li>
            </ul>
          </nav>
        </div>
        <p className='main-content'>
          {selectedLink === 0 && <div className='home'>Welcome! <br></br><br></br> I'm Kavya and I'm a software engineer specializing in frontend development. <br></br><br></br>I graduated from UCSD with a degree in Chemical Engineering and became interested in software engineering and the user experience. I love the challenging material and using my problem solving skills, so I decided to make a career change and the rest is history!
            <br></br><br></br>In my current role at OfferUp, I work as a frontend engineer on the advertising team, helping to connect local buyers and sellers and contribute to encouraging a sustainable lifestyle!
          </div>}
          {selectedLink === 1 && <div className='home'>I currently work on the network advertising team at OfferUp as a frontend engineer. I develop mobile and web client applications using TypeScript, React Native, and GraphQL. I am passionate about building functional and user friendly mobile and web apps!
          <br></br><br></br> Currently using: TypeScript, React Native, JavaScript, React, Redux, GraphQL, Git, HTML5, CSS3, Node.js, AWS, Webpack, Yarn
          </div>}
          {selectedLink === 2 && <div className='projects'>
            <h2>Personal</h2>
									<h3><a href="https://kavya-kumar94.github.io/HypnoSpace/" target="_blank">HypnoSpace</a></h3>
									<h4>A frontend JavaScript audio visualization utilizing the three.js and AnalyserNode libraries. </h4>
              <h2>Work</h2>
              <h3>A few of the things I've worked on:</h3>
                <h3><a href={require('./shelf_ad.gif')} target="_blank">Shelf Ads</a></h3>
                <h4>Architected reusable advertising module to house and render any type of ad in the OfferUp feed.</h4>
                <h3><a href={require('./ad_offers.gif')} target="_blank">Ad Offers</a></h3>
                <h4>Designed and built in house advertising carousel modal which integrated ad offers from third party ads.</h4>
                <h3><a href={require('./in_app_browser.gif')} target="_blank">In App Browser</a></h3>
                <h4>Added in app browser to third party ads to boost user engagement in the app after interacting with ads.</h4>
								</div>}
          {selectedLink === 3 && <div className='projects'><h3>Connect with me!</h3>
						<div>If you're interested in my work or have any questions, feel free to shoot me an email or use the links below!</div>
            <ul className='list'>
						<li><a href="https://www.linkedin.com/in/kavya-kumar-452635100/" target="_blank" class="icon brands fa-linkedin-in">   LinkedIn</a></li>
						<li><a href="https://github.com/kavya-kumar94" target="_blank" class="icon brands fa-github">   Github</a></li>
						<li><a href="https://angel.co/kavya-kumar-2" target="_blank" class="icon brands fa-angellist">   AngelList</a></li>
            </ul>

            <form className='form' action="https://formspree.io/f/mlezapqe" method="POST">
							<label>
								Your email:
								<input type="email" name="email" />
							</label>
							<label>
								Your message:
								<textarea name="message"></textarea>
							</label>
								<input className='submit-button' type="submit"></input>
						</form>
						</div>}
          {selectedLink === 4 && <div className='home'>Outside of coding, I love to do yoga, run half marathons, sing karaoke, paint, and binge watch TV shows. I'm also a budding photographer and love taking the opportunity to expand my skills during my travels! </div>}
        </p>
      </div>
      </div>

    </div>
  );
}

export default App;
