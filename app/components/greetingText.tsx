export function GreetingText() {
    return (
        writeGreeting(),
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-4">{greetingText}</h1>
            {/* <p className="text-lg text-center mb-4">I'm Jonathan Chapman, a Fullstack Developer.</p>
            <p className="text-lg text-center mb-4">I love creating applications that are both functional and beautiful.</p> */}
        </div>
    );
}

let greetingText = "";

function writeGreeting() {
    let fullGreeting = "Welcome to my Website!";

    for (let i = 0; i < fullGreeting.length; i++) {
        setTimeout(() => {
            greetingText += fullGreeting[i];
            console.log(greetingText);
        }, i * 100);
    }
}