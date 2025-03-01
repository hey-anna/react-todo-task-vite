const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 fixed inset-x-0 bottom-0 z-20 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-sm">© 2025 My Website. All rights reserved.</span>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/privacy" className="hover:text-gray-300 text-xs">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300 text-xs">
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
