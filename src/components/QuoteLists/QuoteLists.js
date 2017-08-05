import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import './QuoteLists.scss';

const panes = [
  { menuItem: 'List 1', render: () => <Tab.Pane>List 1</Tab.Pane> },
  { menuItem: 'List 2', render: () => <Tab.Pane>List 2</Tab.Pane> },
  { menuItem: 'List 3', render: () => <Tab.Pane>List 3</Tab.Pane> },
];

class QuoteLists extends Component {
  render() {
    return (
      <div classNme="Quote-Lists">
        <h1>Quotes</h1>
        <Tab className="tab__content" menu={{ secondary: true, pointing: true, inverted: true }} panes={panes} />
      </div>
    );
  }
}

export default QuoteLists;
