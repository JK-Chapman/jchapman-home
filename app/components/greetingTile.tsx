import photo from '../resources/photo.jpg';

export function GreetingTile() {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-gray-700 rounded-xl shadow-lg p-10 max-w-lg flex flex-col items-center">
      <img className="rounded-full w-45 h-45 object-cover border-4 border-gray-700 mb-4" src={photo} alt="Profile" />
      <h5 className="mb-1 text-xl font-bold text-white">Jonathan Chapman</h5>
      <p className="mb-2 text-gray-400">Full Stack Developer</p>
    </div>
  );
}