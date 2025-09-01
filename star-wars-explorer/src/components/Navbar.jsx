import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
  <div className="h-12 flex justify-between items-end pl-5 pr-5 border-b">
  <p className="font-bold font-mono text-xl">Jedi<span className="font-bold font-mono text-orange-500 text-3xl">Ex</span></p>
  <div className="flex gap-10">
    <Link to={"/"} className="hover:text-orange-400">Films</Link>
    <Link to={"/people"} className="hover:text-orange-400">People</Link>
    <Link to={"/planets"} className="hover:text-orange-400">Planets</Link>
    <Link to={"/species"} className="hover:text-orange-400">Species</Link>
    <Link to={"/vehicles"} className="hover:text-orange-400">Vehicles</Link>
    <Link to={"/starships"} className="hover:text-orange-400">Starships</Link>
    </div>
  </div>
  )
};
