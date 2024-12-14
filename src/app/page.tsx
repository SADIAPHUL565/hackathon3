// import Image from "next/image";


import Footer from './components/footer';
import Navbar from './components/Navbar'
import Topone from './components/Topone';
import TopTwoVersace from './components/Toptwoversace';
import TopThreeBrowse from './components/TopthreeBrowse';
import TopfourHappy from './components/TopfourHappy';

export default function Home() {
  return (
   <div>
    <Navbar />
<Topone/>
<TopTwoVersace/>
<TopThreeBrowse/>
<TopfourHappy/>
    <Footer/>


   </div>
  );
}
