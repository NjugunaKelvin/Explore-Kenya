import { useState } from "react";
import { NavItem } from "./navData";
import Link from "next/link";

export default function MobileMenu({
  items,
  isOpen,
  onClose,
}: {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 left-0 w-4/5 max-w-sm bg-black border-r border-gray-800 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-white">Explore Kenya</h2>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100%-72px)]">
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.title}>
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center justify-between w-full p-3 text-left ${item.color} hover:bg-gray-900 rounded-md transition-colors`}
                      onClick={() => toggleItem(item.title)}
                      aria-expanded={expandedItem === item.title}
                    >
                      <span className="font-medium">{item.title}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          expandedItem === item.title ? "rotate-180" : ""
                        }`}
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
                    </button>
                    {expandedItem === item.title && (
                      <ul className="ml-4 mt-1 space-y-2 border-l-2 border-gray-800 pl-3">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <Link
                              href={child.path || "#"}
                              className={`block p-2 ${child.color} hover:bg-gray-900 rounded-md transition-colors`}
                              onClick={onClose}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={`block p-3 ${item.color} hover:bg-gray-900 rounded-md transition-colors font-medium`}
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}