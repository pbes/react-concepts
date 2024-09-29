import { Link } from 'react-router-dom'
import './App.css'
import { components } from './api/concept'

function App() {
  return (
    <>
      <main>
        <h1>React patterns & concepts</h1>
        <ul>
          {components.filter(c => !!c.route).map((c) => (
            <li key={c.route}>
              <Link to={c.route}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
