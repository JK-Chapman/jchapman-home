import photo from '../resources/photo.jpg';

export function GreetingTile() { return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img className="rounded-t-lg" src={photo}>
                </img>
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jonathan Chapman</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Full Stack Developer</p>
            </div>
        </div>
    </div>

) }