import Footer from './Footer'
import Header from './Header'
import Banner from './Banner'

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <Header />
      <main className="flex flex-col flex-auto justify-center px-8">
        <div className="flex-auto">{children}</div>
        <Footer />
      </main>
    </>
  )
}
