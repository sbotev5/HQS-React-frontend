import axios from 'axios';

const TICKET_API_BASE_URL = "http://localhost:9001/tickets/readAll";

class TicketService{
    getTickets(){
        return axios.get(TICKET_API_BASE_URL);
    }
}

export default new TicketService();