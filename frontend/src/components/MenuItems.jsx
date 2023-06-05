import { NavLink } from 'react-router-dom'

const MenuItems = ({ items, isOpen, setIsOpen }) => {
  return (
    <>
      {items.map((item) => (
        <NavLink
          className={`px-3 py-3 bg-white flex ${item.condition && 'hidden'
            } rounded-[10px] items-center justify-center w-full gap-2 duration-600`}
          key={item.link}
          to={item.link}
          onClick={() => setIsOpen(false)}
        >
          {item.icon}
          <p
            className={`text-base font-roboto tracking-wider ${isOpen ? 'inline-block' : 'hidden'
              }`}
          >
            {item.name}
          </p>
        </NavLink>
      ))}
    </>
  )
}

export default MenuItems
