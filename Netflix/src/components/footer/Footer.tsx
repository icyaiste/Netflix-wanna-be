export default function Footer() {
  return (
    <footer className="w-full h-[15rem] grid grid-cols-3 grid-rows-3 bg-black rounded-md p-4 m-2">
      <section className="col-span-1 place-items-center">
        <p className="text-xl">Questions?</p>
        <ul className="flex flex-col m-2">
          <article className="place-self-center m-1 text-gray-400">FAQ</article>
          <article className="place-self-center m-1 text-gray-400">
            Media Center
          </article>
          <article className="place-self-center m-1 text-gray-400">
            Buy Gift Cards
          </article>
          <article className="place-self-center m-1 text-gray-400">
            Cookie Preferences
          </article>
        </ul>
      </section>
      <section className="row-start-3 col-start-2">
        <p className="text-2xl">Copyright @ 2024</p>
      </section>
      <section className="row-start-1 col-start-3">
        <p className="mb-5 text-xl">Contact</p>
        <ul>
          <li className="place-self-center m-1 text-gray-400">
            info.Notflix@gmail.com
          </li>
          <li className="place-self-center m-1 text-gray-400">Chat With Us</li>
        </ul>
      </section>
    </footer>
  );
}
