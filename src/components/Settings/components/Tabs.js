import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import '../Settings.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { active: props.active };
  }

  labels = (child, i) => {
    let activeClass = (this.state.active === i ? 'active' : '');
    return (
      <Menu.Item
        role="tab"
        key={i}
        aria-controls={`panel${i}`}
        name="General"
        className={activeClass}
        onClick={(event) => this.onClick(event, i)}
      >
        {child.props.label}
      </Menu.Item>
    );
  }
  renderMenu() {
   return (
      <div className="tabs__labels" role="tab list">
        {this.props.children.map(this.labels)}
      </div>
    );
  }

  onClick = (event, index) => {
    event.preventDefault();
    this.setState({
      active: index
    });
  }

  render() {
    const { showing } = this.props;
    let settingsClassName = 'Settings tabs';
    if (showing) {
      settingsClassName += ' showing';
    }
    return (
      <div className={settingsClassName}>
        <Grid>
          <Grid.Column className="menu-container" width={4}>
            <Menu size="massive" vertical inverted text>
              {this.renderMenu()}
            </Menu>
          </Grid.Column>
          <Grid.Column 
            className="current-tab-container" 
            stretched 
            width={12}
          >
            {this.props.children[this.state.active]}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Tabs;
