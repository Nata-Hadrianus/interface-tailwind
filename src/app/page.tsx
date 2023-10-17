import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import Body from "@/components/Body";


export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
         <SideBar/>
          <Body/>
      </div>
         <Footer/>
    </div>
  );
}

