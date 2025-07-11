function Navbar() {
  return (
    <div>
      <div className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* logo */}
              <div>
                <h1 className="text-2xl font-bold text-blue-600">TeamHub</h1>
              </div>

              {/* desktop links */}
              <div className="hidden sm:flex sm:items-center">
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mr-4">Home</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mr-4">Team</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mr-4">About</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600">Contact</a>
              </div>

              {/* signup button */}
              <div className="hidden sm:flex sm:items-center">
                <a href="#" className="text-white text-sm font-semibold border px-4 py-2 rounded-full bg-blue-600" >Join Us</a>
              </div>

              {/* mobile menu icon */}
              <div className="sm:hidden cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z"/>
                </svg>
              </div>
            </div>

            {/* mobile menu */}
            <div className="block sm:hidden bg-white border-t-2 py-2">
              <div className="flex flex-col">
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mb-1">Home</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mb-1">Team</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mb-1">About</a>
                <a href="#" className="text-gray-500 text-sm font-semibold hover:text-blue-600 mb-1">Contact</a>
                <div className="flex justify-between items-center border-t-2 pt-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 mr-4">Join Us</button>
                 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
