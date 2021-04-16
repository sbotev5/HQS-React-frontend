import axios from 'axios';

const TICKET_API_BASE_URL = "http://localhost:9001/tickets/readAll";

const TICKET_API_CREATE_URL = "http://localhost:9001/tickets/create";

class TicketService{
    getTickets(){
        return axios.get(TICKET_API_BASE_URL);
    }

    createTicket(ticket){
        return axios.post(TICKET_API_CREATE_URL, ticket)
    }
}

export default new TicketService();