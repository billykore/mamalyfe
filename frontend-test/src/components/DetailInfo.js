import Counter from './Counter'
import Button from './Button'

const DetailInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[522px] min-w-[450px] bg-gray-500">
      </div>

      <div className="ml-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="uppercase">Category D</h1>
            <h1 className="text-lg uppercase font-bold my-2">Product Name</h1>
            <h1 className="text-xl text-gray-400 font-bold">123</h1>
          </div>
          <h1 className="font-bold text-gray-400 text-xl">3.9</h1>
        </div>
        <p className="my-6">
          Description example Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit nisl sodales massa volutpat proin egestas etiam. Sit pellentesque in elementum mauris faucibus ut. Amet tempor consectetur lobortis vitae. Sagittis velit porta aliquam dolor ridiculus nunc, porttitor a odio. Integer gravida sed sed pulvinar vitae. Ultricies eget facilisis volutpat libero fusce eu integer praesent. Tortor ut sit nec sit nisi, tristique at odio.
        </p>

        <div className="flex items-center my-10">
          <p className="text-sm uppercase font-bold mr-6">Quantity:</p>
          <Counter />
        </div>

        <Button>Add to cart</Button>
      </div>
    </div>
    
  )
}

export default DetailInfo