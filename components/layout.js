import Navigation from '../components/navigation'

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
      <footer>
        copyright 2020
      </footer>
    </div>
  )
}

export default Layout