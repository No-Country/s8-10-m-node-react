import { Link } from 'react-router-dom'
import { IoChevronForwardOutline } from 'react-icons/io5'

const ConfigurationOptions = ({ option }) => {
  return (
    <Link
      to={option?.link}
      className="w-[90%] h-auto flex justify-between items-center font-roboto border-b border-black pb-2 px-2"
    >
      <div className="flex items-center md:gap-8 gap-3">
        <span className="">{option.icon}</span>
        <p>{option.name}</p>
      </div>
      <span className="hover:rotate-90 transition-all duration-500">
        <IoChevronForwardOutline size={25} />
      </span>
    </Link>
  )
}

export default ConfigurationOptions
