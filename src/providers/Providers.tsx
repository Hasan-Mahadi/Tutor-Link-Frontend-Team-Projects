import UserProvider from "@/context/UserContext";


const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
};

export default Providers;