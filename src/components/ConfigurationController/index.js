// Write your code here

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContext = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="Configuration-Controller">
          <h1>LayOut</h1>
          <div>
            <div>
              <input
                type="checkbox"
                id="Content"
                onChange={onChangeContext}
                checked={showContent}
              />
              <label htmlFor="Content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Left Navbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="Left Navbar">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Right Navbar"
                checked={showRightNavbar}
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="Right Navbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
