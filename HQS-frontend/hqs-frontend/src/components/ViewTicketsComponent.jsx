import React, { Component } from 'react';
import TicketService from '../services/TicketService';

class ViewTicketsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickets: []
        }
        this.addTicket = this.addTicket.bind(this);
        this.editTicket = this.editTicket.bind(this);
    }

    componentDidMount(){
        TicketService.getTickets().then((res) => {
            this.setState({ tickets: res.data});
    });
    }

    editTicket(id){
        this.props.history.push(`/update-ticket/${id}`);
    }

    addTicket(){
        this.props.history.push('/add-ticket');
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Tickets</h2> 
               <div className = "row">
                <button className = "btn btn-primary" onClick = {this.addTicket}> Add Ticket</button>
               </div>
                <div className= "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                               <th>ID</th> 
                               <th>Title</th> 
                               <th>Author</th> 
                               <th>Description</th> 
                               <th>Urgency</th> 
                               <th>Solution</th> 
                               <th>Created</th> 
                               <th>Actions</th> 
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                    <tr key ={ticket.id}>
                                        <td>{ticket.id}</td>
                                        <td>{ticket.title}</td>
                                        <td>{ticket.author}</td>
                                        <td>{ticket.description}</td>
                                        <td>{ticket.urgency}</td>
                                        <td>{ticket.solution}</td>
                                        <td>{ticket.timeCreated}</td>
                                        <td>
                                                 <button onClick={ () => this.editTicket(ticket.id)} className="btn btn-info">Update </button>
                                             </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default ViewTicketsComponent;