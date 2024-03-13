import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
 
const [themeMode , setThemeMode] = useState('light')

const lightTheme =()=>{
  setThemeMode('light')
}

const darkTheme =()=>{
  setThemeMode('dark')
}
// the actual change in theme will be here 
useEffect(()=>{
  let getHtml = document.querySelector('html')
  getHtml.classList.remove('light' , 'dark')
  getHtml.classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider  value={{themeMode , darkTheme , lightTheme}}>
    <h1 className='p-4 text-3xl bg-gray-400'>Theme Switcher using context_API</h1>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
