import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class CreateTicketComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state =  {
            title: '',
            author: '',
            description: '',
            urgency: '',
            solution: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeUrgencyHandler = this.changeUrgencyHandler.bind(this);
        this.changeSolutionHandler = this.changeSolutionHandler.bind(this);

        this.addTicket = this.addTicket.bind(this);
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value})

    }

    changeAuthorHandler = (event) => {
        this.setState({author: event.target.value})

    }

    changeDescriptionHandler =(event) => {
        this.setState({description: event.target.value})

    }

    changeUrgencyHandler =(event) => {
        this.setState({urgency: event.target.value})

    }
    changeSolutionHandler =(event) => {
        this.setState({solution: event.target.value})

    }

    addTicket = (e) =>{
        e.preventDefault();
        let ticket = {title : this.state.title, author : this.state.author, description : this.state.description, urgency : this.state.urgency, solution : this.state.solution};
        console.log('Created Ticket=> ' + JSON.stringify(ticket));

        TicketService.createTicket(ticket).then(res => {
            this.props.history.push('/tickets')
        })
    }

    cancel(){
        this.props.history.push('/tickets');
    }
    
    
    render() {
        return (
            <div>
                  <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">   
                        <h3 className ="text-center">Add Ticket</h3>
                        <div className = "card-body"> </div>
                        <form>
                            <div className = "form-group"> 
                            <label> Title: </label>
                            <input placeholder="Title" name="title" className="form-control" 
                                value={this.state.title} onChange={this.changeTitleHandler}/>
                            
                            </div>

                            <div className = "form-group"> 
                            <label> Author: </label>
                            <input placeholder="Author" name="author" className="form-control" 
                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                            
                            </div>

                            <div className = "form-group"> 
                            <label> Description: </label>
                            <input placeholder="Description" name="description" className="form-control" 
                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                            
                            </div>

                            <div className = "form-group"> 
                            <label> Urgency (Optional): </label>
                            <input placeholder="Urgency" name="title" className="form-control" 
                                value={this.state.urgency} onChange={this.changeUrgencyHandler}/>
                            
                            </div>

                            <div className = "form-group"> 
                            <label> Solution (Optional): </label>
                            <input placeholder="Solution" name="solution" className="form-control" 
                                value={this.state.solution} onChange={this.changeSolutionHandler}/>
                            
                            </div>

                            <button className="btn btn-success" onClick={this.saveOrUpdateTicket}>Add</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                        </form>
                         </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateTicketComponent;