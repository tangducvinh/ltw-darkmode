import { useState, useEffect } from 'react'

import { Navbar, Content, Information } from './companents'


const App = () => {
  const [ isDesktop, setIsDesktop ] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='bg-gradient-to-b dark:from-purple-950 dark:to-purple-600 min-h-screen pb-[100px] from-pink-300 to-pink-700 max-sm:pb-[50px]'>
      <Navbar isDesktop={isDesktop} />      
      <Content /> 
      <Information />
    </div>
  );
}

export default App;
