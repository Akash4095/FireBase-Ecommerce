<nav className="bg-pink-600 sticky top-0">
{/* main  */}
<div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
    {/* left  */}
    <div className="left py-3 lg:py-0">
        <Link to={'/'}>
            <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
        </Link>
    </div>

    {/* right  */}
    <div className="right flex justify-center mb-4 lg:mb-0">
        {navList}
    </div>

    {/* Search Bar  */}
    <SearchBar />
</div>
</nav>