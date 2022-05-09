import Footer from './Footer';
import Header from './Header';
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      {/* <Script
        src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"
        onLoad={() => {
          new Snowflakes({ color: '#fffafa', count: 25, minSize: 5, maxSize: 15 });
        }}
      /> */}
      <Header />
      <main className="flex flex-col flex-auto justify-center px-8">
        <div className="flex-auto">{children}</div>
        <Footer />
      </main>
    </>
  );
}
