import Badge from './Badge'
import User from './User'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex">
        <h1 className="uppercase text-gray-500 font-medium mr-2">Filter:</h1>
        <div className="space-x-3">
          <Badge>
            All
          </Badge>
          <Badge>
            Category A
          </Badge>
          <Badge>
            Category B
          </Badge>
          <Badge>
            Category C
          </Badge>
          <Badge>
            Category D
          </Badge>
        </div>
      </div>

      <div>
        <User />
      </div>
    </div>
  )
}

export default Navbar