import Badge from './Badge'

const User = () => {
  return (
    <div className="flex items-center space-x-3">
      <h1 className="text-gray-500 uppercase font-medium">User</h1>
      <div className="flex items-center">
        <h1 className="uppercase mr-2 text-gray-500 font-medium">Cart:</h1>
        <Badge>3</Badge>
      </div>
    </div>
  )
}

export default User