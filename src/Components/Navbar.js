import globe from "../assets/planet-earth.png";

const Navbar = () => {
  return (
    <div className="nav__header">
      <nav className="flex">
        <img src={globe} alt="globe" className="globe" />
        <h2>mytraveljournal</h2>
      </nav>
    </div>
  );
};

export default Navbar;
