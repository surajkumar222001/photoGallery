import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import SuggestionBox from './components/SuggestionBox'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import * as themReducer from './redux/them/them.reducer'
function App() {
let {themColor} = useSelector(state => state[themReducer.themFeatureKey])

 
  return (
    <div className={( themColor ?   'night' : 'day')}>
       <Header/>
       <Home/>
       <SuggestionBox/>
    </div>
  )
}

export default App
