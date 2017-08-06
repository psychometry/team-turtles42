import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import './Settings.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
  }

  labels = (child, i) => {
    let activeClass = (this.state.selected === i ? 'active' : '');
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
      selected: index
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
          <Grid.Column width={4}>
            <Menu size="massive" vertical inverted text>
              {this.renderMenu()}
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {this.props.children[this.state.selected]}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Tabs;
