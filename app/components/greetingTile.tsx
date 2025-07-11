import photo from '../resources/photo.jpg';

export function GreetingTile() {
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-full w-90 h-90 object-cover border-4 border-white-700 mb-4" alt="Profile" src={photo} />
      {/* <h5 className="mb-1 text-xl font-bold text-white">Jonathan Chapman</h5> */}
      {/* <p className="mb-2 text-gray-400">Full Stack Developer</p> */}
    </div>
  );
}