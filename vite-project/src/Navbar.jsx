// import { useState } from "react";
// import { Menu, X, Search } from "lucide-react";
// import "./index.css"; // Import CSS for styling

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleTab = (tab) => {
//     setActiveTab(activeTab === tab ? null : tab);
//   };

//   return (
//     <nav className="navbar flex justify-between items-center p-4 bg-[#FFF8F0] shadow-xl relative">
//       {/* Logo aligned to the left */}
//       <div className="text-red-600 font-bold text-xl">SOOPER BOOKS</div>

//       {/* Centered navigation links */}
//       <div className="hidden md:flex gap-6 items-center bg-white border border-red-600 rounded-full px-6 py-2">
//         {["Read", "Listen", "Search"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => toggleTab(tab)}
//             className="text-black hover:text-red-600 transition font-medium"
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Hamburger menu always visible */}
//       <button className="text-red-600" onClick={toggleMenu}>
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-[#FFF8F0] p-4 flex flex-col items-center shadow-md md:hidden">
//           {["Read", "Listen", "Search"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => toggleTab(tab)}
//               className="text-black hover:text-red-600 py-2 w-full text-center"
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Dropdown Content with Cool Animation */}
//       {activeTab && (
//         <div className="absolute top-16 bg-white border border-gray-300 rounded-lg shadow-lg shadow-red-300/50 p-4 w-64 animate-fadeIn">
//           {activeTab === "Read" && (
//             <div>
//               <p className="text-gray-700 font-semibold">Categories:</p>
//               <ul className="mt-2 space-y-2">
//                 <li className="p-2 border-b hover:bg-gray-100 transition">
//                   📖 Kids 0-5
//                 </li>
//                 <li className="p-2 border-b hover:bg-gray-100 transition">
//                   🦸 Comics
//                 </li>
//                 <li className="p-2 hover:bg-gray-100 transition">
//                   📚 Short Stories
//                 </li>
//               </ul>
//             </div>
//           )}
//           {activeTab === "Listen" && (
//             <div>
//               <p className="text-gray-700 font-semibold">Audio Categories:</p>
//               <ul className="mt-2 space-y-2">
//                 <li className="p-2 border-b hover:bg-gray-100 transition">
//                   🌙 Bedtime Stories
//                 </li>
//                 <li className="p-2 hover:bg-gray-100 transition">
//                   🏕️ Adventure Tales
//                 </li>
//               </ul>
//             </div>
//           )}
//           {activeTab === "Search" && (
//             <div className="flex items-center border border-gray-300 rounded-md p-2 shadow-inner">
//               <Search size={20} className="text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 className="ml-2 outline-none w-full"
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import "./index.css"; // Import CSS for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <nav className="navbar sticky top-0 z-50 flex justify-between items-center p-4 bg-[#FFF8F0] shadow-xl relative">
      {/* Logo aligned to the left */}
      <div className="text-red-600 font-bold text-xl">SOOPER BOOKS</div>

      {/* Centered navigation links */}
      <div className="flex gap-6 items-center bg-white border border-red-600 rounded-full px-6 py-2 mx-auto">
        {["Read", "Listen", "Search"].map((tab) => (
          <button
            key={tab}
            onClick={() => toggleTab(tab)}
            className="text-black hover:text-red-600 transition font-medium"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hamburger menu button visible at all times */}
      <button className="text-red-600 ml-auto md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu (visible only when 'isOpen' state is true and screen is small or medium) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FFF8F0] p-4 flex flex-col items-center shadow-md md:hidden">
          {["Read", "Listen", "Search"].map((tab) => (
            <button
              key={tab}
              onClick={() => toggleTab(tab)}
              className="text-black hover:text-red-600 py-2 w-full text-center"
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Dropdown Content with Cool Animation */}
      {activeTab && (
        <div className="absolute top-16 bg-black opacity-50 border border-gray-300 rounded-lg shadow-lg shadow-red-300/50 p-4 w-64 animate-fadeIn">
          {activeTab === "Read" && (
            <div>
              <p className="text-white font-semibold">Categories:</p>
              <ul className="mt-2 space-y-2">
                <li className="p-2 border-b hover:bg-gray-100 transition">
                  <a href="#kids" className="text-white hover:text-red-600">
                    📖 Kids 0-5
                  </a>
                </li>
                <li className="p-2 border-b hover:bg-gray-100 transition">
                  <a href="#comics" className="text-white hover:text-red-600">
                    🦸 Comics
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 transition">
                  <a
                    href="#short-stories"
                    className="text-white hover:text-red-600"
                  >
                    📚 Short Stories
                  </a>
                </li>
              </ul>
            </div>
          )}
          {activeTab === "Listen" && (
            <div>
              <p className="text-white font-semibold">Audio Categories:</p>
              <ul className="mt-2 space-y-2">
                <li className="p-2 border-b hover:bg-gray-100 transition">
                  <a
                    href="#bedtime-stories"
                    className="text-white hover:text-red-600"
                  >
                    🌙 Bedtime Stories
                  </a>
                </li>
                <li className="p-2 hover:bg-gray-100 transition">
                  <a
                    href="#adventure-tales"
                    className="text-white hover:text-red-600"
                  >
                    🏕️ Adventure Tales
                  </a>
                </li>
              </ul>
            </div>
          )}
          {activeTab === "Search" && (
            <div className="flex items-center border border-gray-300 rounded-md p-2 shadow-inner">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search books..."
                className="ml-2 outline-none w-full"
              />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
