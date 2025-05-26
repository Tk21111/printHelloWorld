import { Card } from "../PrintHelloWorldIntro";

export default function Document() {
    return (
        <div className="flex h-screen w-full">
            <Card text="Js" i={1}/>
            <Card text="C#" i={1}/>
        </div>
    )
}