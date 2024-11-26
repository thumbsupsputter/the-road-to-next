import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Hello Home Page</h1>
      <Link href="/tickets" className="underline">
        Go to Tickets
      </Link>
    </div>
  );
};
export default HomePage;
