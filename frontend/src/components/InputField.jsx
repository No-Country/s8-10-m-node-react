
const InputField = ({ id, type, name, placeholder, labelFor, content, setValue, icon, condition }) => {
  return (
    <div className='flex flex-col relative'>
      <input className='outline-0 px-4 py-3 border border-black/40 rounded-lg peer focus:border-black transition duration-400 placeholder:font-inter placeholder:text-gray-400 placeholder:text-sm' id={id} type={type} name={name} placeholder={placeholder} />
      
      <label className="absolute left-4 -top-[10px] px-1 bg-white text-sm text-gray-400 transition duration-400 peer-focus:text-black font-inter" htmlFor={labelFor}>{content}</label>
      <span className='absolute right-4 top-[18px]' onClick={() => setValue(!condition)}> {icon} </span>
      
    </div>
  );
}

export default InputField;
