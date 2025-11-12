import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <nav className="border flex justify-between py-5 px-10">
          <div className="px-5">
            Logo Img
          </div>
          <div>
            <ul className="flex gap-5 px-5">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container mx-auto min-h-screen border">
        <p>This is a title</p>
      </main>
    </>
  );
}
