import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Concept } from './api/concept'
import { CompoundComponents } from './concepts/compound-components/page/CompoundComponents'
import { ModernDataFetching } from './concepts/modern-data-fetching/ModernDataFetching'

const components: Concept[] = [
  {
    name: 'Compound components',
    route: 'compound-components',
    component: CompoundComponents
  },
  {
    name: 'Modern data fetching',
    route: 'modern-data-fetching',
    component: ModernDataFetching
  }
]

function App() {
  return (
    <>
      <main>
        <h1>React Patterns</h1>
        <ul>
          {components.map((c) => (
            <li key={c.route}>
              <Link to={c.route}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </main>
      <hr />
      <Routes>
        {components.map((c) => (
          <Route key={c.route} path={c.route} element={<c.component />} />
        ))}
      </Routes>
    </>
  )
}

export default App
