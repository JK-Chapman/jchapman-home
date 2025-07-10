import NavBar from "../../components/navbar";
import { GreetingTile } from "../../components/greetingTile";
import TypingText from "../../components/typingText";
import { ResumeCard } from "../../components/resumeCard";
import type { JobInfo } from "../../components/resumeCard";

export function Main() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen min-h-0 grid grid-rows-[auto_1fr]">
      <div className="h-full mb-2">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 px-4">
        <div>
          <TypingText text="Welcome!" speed={150} />
          <div className="text-lg text-gray-400 max-w-md">
            <p>
              I'm Jon Chapman, a full stack developer with a passion for creating awesome applications, solving challenging problems, and learning new technologies!
            </p>
          </div>
        </div>
        <div>
          <GreetingTile />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center h-full gap-12 pt-4">
        <h1 className="text-5xl">My Experience</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {jobs.map((job, idx) => (
            <ResumeCard
              key={idx}
              {...job}
            />
          ))}
      </div>
    </main>
  );
}

const jobs: JobInfo[] = [
  {
    company: "G.A. Richards Group",
    position: "Applications Developer II",
    location: "GRAND RAPIDS, MI",
    startDate: "06/2025",
    endDate: "PRESENT",
    bullets: [
      "Acted as lead developer on a major expansion of an internal web application suite to expand functionality into a new department, including many new custom features and automation.",
      "Continue to optimize and polish our workflow automation suite of apps in preparation of expanding to multiple companies.",
      "Started planning to deprecate many legacy ASP.NET applications and move our tech stack to .NET 8+ and Vue.js.",
      "Shared domain knowledge with new developers and helped onboard them to the team.",
    ]
  },
  {
    company: "G.A. Richards Group",
    position: "Applications Developer I",
    location: "GRAND RAPIDS, MI",
    startDate: "06/2022",
    endDate: "07/2025",
    bullets: [
      "Developed an inventory tracking system API and suite of inventory web apps (single page application utilizing Vue.js) and integrated them into existing workflow management software, enhancing inventory accuracy from below 50% to over 85%.",
      "Designed and implemented a company dashboard web application (including new stored procedures, database tables, and API) with live updating features implemented via SignalR. This eliminated a manually updated google sheet, saving the production team hours of manual data entry per day.",
      "Managed legacy business software such as EDI translation software, many business web applications, APIs, and console apps using C#.NET, Python, ASP, and Javascript. Frequently optimized slow processes and stored procedures for up to 70% efficiency gains.",
      "Worked on issue tickets and communicated with customers that submitted to resolve bugs.",
      "Created and maintained stored procedures with corresponding API endpoints utilizing C# ADO.NET."
    ]
  },
  {
    company: "Terrapin",
    position: "Junior Software Developer",
    location: "GRAND RAPIDS, MI (REMOTE)",
    startDate: "08/2020",
    endDate: "06/2022",
    bullets: [
      "Developed a custom internal web based suite of applications that helped assist and automate work processes using Python, Flask and MySQL.",
      "Worked alongside department and team leads to design efficient automation and data entry applications.",
      "Implemented CI/CD pipelines for faster deployments.",
      "Debugged issues from customer tickets and developed fixes for them.",
      "Developed web interfaces for data reports using Python, Flask, and SQLAlchemy ORM.",
    ]
  },
  {
    company: "Volta Power Systems",
    position: "Software Developer Temp",
    location: "HOLLAND, MI",
    startDate: "05/2020",
    endDate: "08/2020",
    bullets: [
      "Developed a custom internal web based suite of applications that helped assist and automate work processes using Python, Flask and MySQL.",
      "Worked alongside department and team leads to design efficient automation and data entry applications.",
      "Implemented CI/CD pipelines for faster deployments.",
      "Debugged issues from customer tickets and developed fixes for them.",
      "Developed web interfaces for data reports using Python, Flask, and SQLAlchemy ORM.",
    ]
  },
];