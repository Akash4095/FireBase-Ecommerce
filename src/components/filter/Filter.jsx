import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey, } = context

    return (
        <div>
            <div className=' container mx-auto px-5 mt-1'>
                <div className=""
                    style={{
                        backgroundColor: mode === 'dark' ? '#282c34' : '',
                        color: mode === 'dark' ? 'white' : '',
                    }}>
                    <div className="relative">
                        <input
                            type="text"
                            name="searchkey"
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            id="searchkey"
                            placeholder="Search here"
                            className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black" style={{ color: mode === 'dark' ? 'white' : '', }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter