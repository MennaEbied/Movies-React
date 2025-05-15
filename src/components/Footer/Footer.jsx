function Footer() {
  return (
    <div className="bottom-0 py-4 px-6  bg-dark text-Orange grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-7">
      <p className="font-bold">TVmov</p>
      <div className="flex flex-col">
        <h3 className="font-bold">The Basics</h3>
        <a
          href="https://www.themoviedb.org/about/get-in-touch/"
          className="hover:text-orange-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
        <a
          href="https://www.themoviedb.org/about "
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition-colors"
        >
          About Us
        </a>
        <p>Features</p>
      </div>
      <div className="flex flex-col">
        <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition-colors">Documentation</a>
        <p>FAQ</p>
        <a href="https://www.themoviedb.org/talk" target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition-colors">Support</a>
      </div>
      <div>
        <p> &copy; {new Date().getFullYear()} TVmov. All rights reserved. </p>
        <p>
          Powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition-colors"
          >
            The Movie Database (TMDB)
          </a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
