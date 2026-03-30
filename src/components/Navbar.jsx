import { NavLink } from "react-router";

function Navbar() {
  function handleActive({ isActive }) {
    return isActive
      ? "bg-neutral-500 px-3 py-1 rounded-3xl shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)] text-neutral-100 hover:bg-[#666] transition-color"
      : "px-3";
  }

  return (
    <div className="fixed top-12 z-20 shadow-2xl shadow-neutral-400 rounded-4xl">
      <nav className="bg-[#444] p-2 h-16 w-100 flex items-center justify-center rounded-4xl shadow-inner shadow-neutral-300">
        <ul className="flex justify-center items-center text-2xl text-neutral-50 bg-[#888] py-2 px-4 rounded-3xl shadow-inner shadow-neutral-300 w-95 h-12">
          <NavLink to="/admin/create-card" className={handleActive}>
            <li>Create</li>
          </NavLink>

          <NavLink to="/admin/cards" className={handleActive}>
            <li>Read</li>
          </NavLink>

          <NavLink to="/admin/update-card/:id" className={handleActive}>
            <li>Update</li>
          </NavLink>
          <NavLink to="/admin/delete-cards" className={handleActive}>
            <li>Delete</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
