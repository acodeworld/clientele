import React, {useState}from 'react'
import Header from '../../Components/Header/Header'
import Sidebar_Nav from '../../Components/Sidebar_Nav/Sidebar_Nav'
import './Home.scss'





const Home = (props : any) => {

  

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  // const isToggleOpen = useRef(false)
  
  const handleToggle = () => setIsToggleOpen(!isToggleOpen)



  return (
    <div className='home-container'>

      <div className='body-container hero'>
          <Sidebar_Nav 
          isToggleOpen={isToggleOpen}
          handleToggle={handleToggle}/>
          <Header     
          handleToggle={handleToggle}
          />
      </div>
      <div className="home-cards-container">
        <div className='card1 card' >
          <img src="/src/images/cards/card1.jpg" alt="" />
          <h1 className='card-text'>Men</h1>

        </div>
        <div className='card2 card'>
          <img src="/src/images/cards/card2.jpg" alt="" />
          <h1 className='card-text'>Women</h1>


        </div>
        <div className='card1 card'>
          <img src="/src/images/cards/card3.jpg" alt="" />
          <h1 className='card-text'>Children</h1>


        </div>
        
        

      </div>
    </div>
  )
}

export default Home