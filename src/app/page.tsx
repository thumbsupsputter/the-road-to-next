import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div>
      <h1>Hello Home Page</h1>
      <Link href={ticketsPath} className="underline">
        Go to Tickets
      </Link>
    </div>
  );
};
export default HomePage;
