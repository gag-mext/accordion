import React from 'react';
import ReactDOM from 'react-dom';
import List from '@gag/list';
import Accordion from '../src';
class AccordionExmple extends React.Component {
  constructor(props) {
    super(props);
    this.state={key:'0'};
    }
  onChange = (key) => {
    console.log(key);
    this.setState({key:'2'});
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            Text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

ReactDOM.render(<AccordionExmple />, document.getElementById('sk-root'));
