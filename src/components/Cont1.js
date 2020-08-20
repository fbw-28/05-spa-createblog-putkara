import React from 'react'

class Cont1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          title: '',
          message: ''
        }
      }
    
    render() {
     return(
       <div className="Cont1">
       <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </div>

        <div className="form-group">
            <label htmlFor="name">Title</label>
            <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
        </div>


        
        <div className="form-group">
            <label htmlFor="message">Content</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary">Create a post</button>
        </form>
        </div>
     );
    }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onTitleChange(event) {
        this.setState({title: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
    }
    }
    
    export default Cont1;