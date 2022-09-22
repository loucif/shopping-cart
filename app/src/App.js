import './App.css'
import { connect } from 'react-redux'
import * as actions from './actions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hi</h2>
      </header>
    </div>
  )
}

export default connect(null, actions)(App)
