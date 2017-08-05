import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import '../Settings.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);  
    this.state = { selected: this.props.selected };
  }

  renderMenu() {
    function labels(child, i) {
      let activeClass = (this.state.selected === i ? 'active' : '');
      return (
        <Menu.Item 
          role="tab" 
          key={i} 
          aria-controls={`panel${i}`}
          name="General" 
          className={activeClass}  
          onClick={this.onClick.bind(this, i)}
        >
          {child.props.label}
        </Menu.Item>
      );
    }

   return (
      <div className="tabs__labels" role="tab list">
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }

  onClick(index, event) {
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
            <Menu fluid vertical inverted tabular>
              {this.renderMenu()}
            </Menu>
          </Grid.Column>  
          <Grid.Column stretched width={12}> 
            <Segment className="tabs__content">
              {this.props.children[this.state.selected]}
            </Segment>
          </Grid.Column>  
        </Grid>  
      </div>
    ); 
  }
}

export default Tabs;
