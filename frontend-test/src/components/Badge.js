const Badge = ({children}) => {
  return (
    <span className="px-4 py-2 bg-gray-300 text-sm text-gray-700 uppercase rounded-full">
      {children}
    </span>
  )
}

export default Badge