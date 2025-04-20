
import { getCurrentUser } from '@/services/AuthService';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const DashboardPage = async () => {
  const session = await getServerSession();
  // const user = await getCurrentUser();
  // console.log("user", user);
  
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email: {session?.user?.email}
          </h1>
          .l5 c5juh
          <Image
            src={session?.user?.image}
            alt="image"
            width={200}
            height={200}
            className="mx-auto"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
