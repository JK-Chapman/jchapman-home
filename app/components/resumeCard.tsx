type JobInfo = {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export default function ResumeCard(jobInfo: JobInfo) {
    return (
        <div className="block p-6 bg-slate-900 border border-slate-400 rounded-lg shadow-sm hover:bg-slate-800 transition-colors duration-300">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl">{jobInfo.company}; {jobInfo.position}</h2>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-gray-200 font-bold">{jobInfo.location}</p>
            <p className="text-xs text-gray-200 font-bold">{jobInfo.startDate} - {jobInfo.endDate}</p>
          </div>
          <hr className="my-2"></hr>
          <p className="text-md">
            {jobInfo.description}
          </p>
        </div>
    )
}