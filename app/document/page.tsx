import CircleNavBar from "../comp/navBar";
import { Card } from "../comp/PrintHelloWorldIntro";

export default function Document() {
    return (
        <div className="flex h-screen w-full">
            <CircleNavBar/>
            <Card text="Js" i={1}/>
            <Card text="C#" i={1}/>
        </div>
    )
}