import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="h-auto align-middle py-8 px-4 rounded-3xl bg-white">
                <ul> {/* TODO: Turn this into a rendered array of buttons! */}
                    <li className="mb-4">
                        <a href="#home" className="text-blue-500 hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#about" className="text-blue-500 hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#about" className="text-blue-500 hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
                        </a>
                    </li>
                    <li className="">
                        <a href="#about" className="text-blue-500 hover:underline">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;