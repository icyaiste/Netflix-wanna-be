export default function Footer() {
  return (
    <footer className="w-full bg-black rounded-lg p-4 m-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
      {/* Questions Section */}
      <section className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
        <p className="text-xl mb-2 text-white">Questions?</p>
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">FAQ</li>
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">Media Center</li>
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">Buy Gift Cards</li>
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">Cookie Preferences</li>
        </ul>
      </section>
  
      {/* Copyright Section */}
      <section className="flex flex-col items-center text-center md:text-left mb-4 md:mb-0">
        <p className="text-2xl text-white mb-2">© 2024 Notflix</p>
      </section>
  
      {/* Contact Section */}
      <section className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
        <p className="text-xl mb-2 text-white">Contact</p>
        <ul className="flex flex-col space-y-2">
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">info.Notflix@gmail.com</li>
          <li className="text-gray-400 cursor-pointer hover:text-blue-300">Chat With Us</li>
        </ul>
      </section>
    </footer>
  );

}
