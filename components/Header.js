/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from "@heroicons/react/solid";
import {useState} from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

export default function Header({placeholder}) {

    const router = useRouter();
    const [searchInp, setSearchInp] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState(1);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInp,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests,
            }
        })
        setSearchInp("");
    }

    return (
        <header className="stickey top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md p-5 md:px-10">
           <div className = "relative flex items-center h-10 cursor-pointer my-auto">   
            <Image 
                src = "https://links.papareact.com/qd3"
                onClick = {() => router.push('/')}
                layout = "fill"
                objectFit = "contain"
                objectPosition = "left"
            />
           </div>
            <div className= 
            "flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
            > 
                <input 
                    className = "flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400"
                    value = {searchInp}
                    onChange = {(e) => setSearchInp(e.target.value)}
                    type="text" placeholder= {placeholder || "Start your search"}/>


            <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white 
                rounded-full p-2 cursor-pointer md:mx-2" />
 
            </div>
            <div className= "flex items-center space-x-4 justify-end text-gray-500">   
                <p className = "hidden md:inline cursor-pointer">Become a host</p>

                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className = "flex items-center space-x-2  p-2 border-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
           </div>
           {searchInp && 
                <div className  = 'flex flex-col col-span-3 mx-auto'> 
                    <DateRangePicker
                        ranges = {[selectionRange]}
                        minDate = {new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange = {handleSelect}
                    /> 
                    <div className = "flex items-center boarder-b mb-4" > <h2 className = "text-2xl flex-grow font-semibold"> Number of Guests </h2>
                    <UsersIcon className = "h-5"/>
                    <input value = {guests} type ="number" 
                        min = {1}
                        onChange = {(e) => setGuests(e.target.value)}
                        className = "w-12 pl-2 text-lg outline-none text-red-400"/>
                    </div>
                    <div className = "flex">
                        <button className = "flex-grow text-gray-500" onClick = {() => setSearchInp("")}>Cancel</button>
                        <button className = "flex-grow text-red-400" onClick = {handleSearch}>Search</button>
                    </div>
                </div>}
        </header>
    )
}
// npm i @heroicons/react
