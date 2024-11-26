export type TicketStatus = 'Open' | 'Done';

export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
}

export const initialTickets: Ticket[] = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'Content 1',
    status: 'Done',
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'Content 2',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'Content 3',
    status: 'Done',
  },
  {
    id: '4',
    title: 'Ticket 4',
    content: 'Content 4',
    status: 'Done',
  },
  {
    id: '5',
    title: 'Ticket 5',
    content: 'Content 5',
    status: 'Done',
  },
  {
    id: '6',
    title: 'Ticket 6',
    content: 'Content 6',
    status: 'Done',
  },
  {
    id: '7',
    title: 'Ticket 7',
    content: 'Content 7',
    status: 'Done',
  },
  {
    id: '8',
    title: 'Ticket 8',
    content: 'Content 8',
    status: 'Done',
  },
];
