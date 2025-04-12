import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";


const CommonLayout = async({children}:{children: React.ReactNode}) => {
     const session = await getServerSession(authOptions)
    return (
        <>
            <Navbar session={session}/>
            <main className="min-h-screen">{children}</main>
            <Footer/>
        </>
    );
};

export default CommonLayout;