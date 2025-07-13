import { NavItem } from "./navData";
import Link from "next/link";

export default function DropDown({ items }: { items: NavItem[] }) {
  const mainItems = items.slice(0, -1); 
  const lastItem = items[items.length - 1]; 

  return (
    <div className="hidden md:flex items-center">
      <div className="flex space-x-6 xl:space-x-8 mx-auto">
        {mainItems.map((item) => (
          <div key={item.title} className="group relative">
            <button className={`${item.color} hover:text-white transition-colors duration-300 flex items-center font-medium`}>
              {item.title}
              {item.children && (
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            {item.children && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-black border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.path || "#"}
                      className={`block px-4 py-2 text-sm ${child.color} hover:bg-gray-900 hover:text-white`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ml-8 pl-8 border-l border-gray-800">
        <div className="group relative">
          <button className={`${lastItem.color} hover:text-white transition-colors duration-300 flex items-center font-medium`}>
            {lastItem.title}
            {lastItem.children && (
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
          {lastItem.children && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                {lastItem.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.path || "#"}
                    className={`block px-4 py-2 text-sm ${child.color} hover:bg-gray-900 hover:text-white`}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}