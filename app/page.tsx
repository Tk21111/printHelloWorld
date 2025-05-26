import Image from "next/image";
import DestopView from "./OptionHero";
import PrintHelloWorldIntro from "./PrintHelloWorldIntro";
import MeetTheTeam from "./meetTheTeam";

export default function Home() {
  return (
    <>
      <PrintHelloWorldIntro />
      {/* <DestopView/> */}
      <MeetTheTeam/>
    </>
    
  );
}
