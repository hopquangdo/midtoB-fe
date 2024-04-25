import Sidebar from "../components/Sidebar";
const Layout = ({children}) =>{
    return (
        <div className="flex flex-row h-screen">
            <Sidebar/>
            <div className="w-full overflow-auto">
                {children}
            </div>
        </div>
    )
}
export default Layout;