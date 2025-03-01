const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/todoList" className="hover:text-gray-300">
                TodoList
              </a>
            </li>
            {/* <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
