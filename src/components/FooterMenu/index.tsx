import { menuItems } from '@/types/menu'

export const FooterMenu = () => {
  return (
    <div className="w-full bg-gray-500 py-4 px-6 lg:hidden">
      <div className="flex justify-around items-center">
        {menuItems.map((item) => (
          <button key={item.label} className="flex flex-col items-center">
            {/* <item.icon className="w-6 h-6 mb-1 text-gray-500 hover:text-blue-600" /> */}
            <span className="text-xs text-white">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
