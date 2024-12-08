
function Header() {
  return (
   <header className="bg-black text-white py-2 px-4 flex justify-between items-center">
    {/* Location */}
    <div className="flex items-center space-x-2">
      <span className="material-icons">location_on</span>
      <span>13756 Ventura Blvd Suite 101, Sherman Oaks, CA 91423</span>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-2">
      <span className="material-icons">call</span>
      <span>(818) 981-1899</span>
    </div>
    </header>
  )
}

export default Header