const Typography = ({ children, className }) => {
  return (
    <h1 className={`text-gray-700 text-4xl uppercase font-bold ${className}`}>
      {children}
    </h1>
  )
}

export default Typography