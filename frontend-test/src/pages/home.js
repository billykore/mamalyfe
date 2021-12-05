import Navbar from '../components/Navbar'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <div className="mx-20 my-10">
      <div className="flex">
        <Navbar />
      </div>
      
      <div className="flex mt-10 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
    
  )
}

export default HomePage