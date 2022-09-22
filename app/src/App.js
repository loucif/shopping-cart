import { connect } from 'react-redux'
import * as actions from './actions'
import Products from './components/Products'

function App() {
  return (
    <div>
      <header >
      </header>
      <main>
        <Products />
      </main>
    </div>
  )
}

export default connect(null, actions)(App)
