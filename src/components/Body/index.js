// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value
      console.log(showContent)
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1>Right Navbar Menu</h1>
              <div>
                <h1>Ad 1</h1>
              </div>
              <div>
                <h1>Ad 2</h1>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
