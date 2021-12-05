const Button = ({ children, className }) => {
  return (
    <button className={`flex items-center justify-center text-gray-700 uppercase font-bold w-[127px] h-[37px] bg-gray-300 rounded-full ${className}`}>
      {children}
    </button>
  )
}

export default Button