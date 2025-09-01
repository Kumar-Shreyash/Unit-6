import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
  <div className="h-12 flex justify-between items-end pl-5 pr-5 border-b">
  <p>JediEx</p>
  <div className="flex gap-10">
    <Link className="hover:text-orange-400">Films</Link>
    <Link className="hover:text-orange-400">People</Link>
    <Link className="hover:text-orange-400">Planets</Link>
    <Link className="hover:text-orange-400">Species</Link>
    <Link className="hover:text-orange-400">Vehicles</Link>
    <Link className="hover:text-orange-400">Starships</Link>
    </div>
  </div>
  )
};
