import User from '../components/User'
import Arrow from '../icons/arrow'
import DetailInfo from '../components/DetailInfo'
import Card from '../components/Card'

const ProductDetail = () => {
  return (
    <div className="mx-20 my-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Arrow />
          <h1 className="ml-3 font-medium text-gray-500">Back</h1>
        </div>
        <User />
      </div>
      <div className="px-20 py-10">
        <DetailInfo />
      </div>
      <div>
        <div className="mt-10">
          <h1 className="uppercase text-lg font-bold mb-5">Related product in Category D</h1>
          <div className="flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail