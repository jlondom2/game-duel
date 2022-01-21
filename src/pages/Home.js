import Header from '../components/Header'
import Meta from '../components/Meta'
import Slider from '../components/Slider'
import GetNews from '../components/GetNews'

const Home = () => {
  // page content
  // const pageTitle = 'Home'
  // const pageDescription = 'welcome to Game Duel'

  return (
    <div>
      <Slider />

      <GetNews />
     
      {/* <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} /> */}
    </div>
  )
}

export default Home