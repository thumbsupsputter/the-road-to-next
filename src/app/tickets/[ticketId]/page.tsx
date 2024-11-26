import { initialTickets } from '@/data';
interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(
    (ticket) => ticket.id === ticketId
  );
  if (!ticket) {
    return (
      <div>
        <h2 className="text-lg">Ticket not found</h2>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-lg">TicketTitle: {ticket.title}</h2>
      <h2 className="text-lg">TicketContent: {ticket.content}</h2>
      <h2 className="text-lg">TicketStatus: {ticket.status}</h2>
    </div>
  );
};

export default TicketPage;
