const InputField = ({
  id,
  type,
  name,
  placeholder,
  labelFor,
  content,
  setValue,
  icon,
  condition,
  func,
  inputValue,
}) => {
  return (
    <div className="w-[108%] max-w-screen-sm flex flex-col relative">
      <input
        className="outline-0 px-4 py-3 border border-[#4C27AE4D] rounded-lg peer focus:border-black transition duration-400 placeholder:font-inter placeholder:text-gray-400 placeholder:font-roboto placeholder:tracking-wider placeholder:text-sm focus:border-[#4C27AE]"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={func}
        value={inputValue}
      />
      <label
        className="absolute left-4 -top-[10px] px-1 bg-white text-sm text-[#4C27AE] font-roboto tracking-wide transition duration-400 peer-focus:text-black font-inter rounded-md border-[#4C27AE4D] "
        htmlFor={labelFor}
      >
        {content}
      </label>
      <span
        className="absolute right-4 top-[15px]"
        onClick={() => setValue(!condition)}
      >
        {' '}
        {icon}{' '}
      </span>
    </div>
  )
}

export default InputField
