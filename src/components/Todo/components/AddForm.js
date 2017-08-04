import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
class AddForm extends Component{
  constructor(props){
    super(props);
    this.state={value:''};
  }
  handleChange=e=>{
    this.setState({value:e.target.value});
  }
  handleSubmit=e=>{
    e.preventDefault();
    if(this.state.value!==''){
      this.props.add(this.state.value);
    }
    this.setState({value:''});
  }
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input type='text' value={this.state.value} onChange={this.handleChange}/>
          <Form.Button type='submit'>add</Form.Button>
        </Form.Group>
      </Form>
    );
  }
};

export default AddForm;

