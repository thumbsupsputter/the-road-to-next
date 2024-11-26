import Link from 'next/link';
import { initialTickets, TicketStatus } from '@/data';
import { ticketPath } from '@/paths';

const ticketIcons: Record<TicketStatus, string> = {
  Open: '🟡',
  Done: '🟢',
};
const TicketsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tickets</h1>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <div>Status: {ticketIcons[ticket.status]}</div>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};
export default TicketsPage;
