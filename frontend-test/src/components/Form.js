const Form = ({ className, label, type }) => {
	return (
		<div className={className}>
			<label className="block uppercase mb-2 text-gray-700 font-bold">{label}</label>
			<input type={type} className="border border-lg border-gray-400 rounded-xl	 px-4 h-12 w-full" />
		</div>
	)
}

export default Form