"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import MusicCard from "../../components/musicCard/musicCard.tsx"



export default function musicList() {
    const [musicItems, setMusicItems] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    useEffect(() => {
        const fetchData=async() => {
            console.log("fetching data")
            try{
                let url = '../../api/musicListGet?search='+searchTerm
                const data = await fetch(url)
                const response = await data.json()
                setMusicItems(response.musicItems)
            }
            catch(err)
            {
                console.log(err)
            }
        }

 
        fetchData()

    },[searchTerm])

        const handleChange = (e)  =>{
           
            setSearchTerm(e.target.value);
       
    }


    return (
        <div>
            <div className="flex md:flex md:flex-grow space-x-1">
            <Link href="../../" className="base-btn btn-purple btn-space-around ">Home</Link>
            </div>
            <br />
            <h3 className="heading">Music Favourites</h3>
            <br />
            Search: <input type="text" name="SearchBox" onChange={handleChange} className="borderedInput text-input w-full" />
            <br />
            <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
                <Link href="./musicAddItem" className="base-btn btn-purple btn-space-around">Add</Link>
            </div>
            <br />

            <div className="centered">
            {musicItems.map(item => (
      
                <MusicCard url={item.URL} id={item.ID} artist={item.Artist} song={item.SongName} category={item.Category} key={item.ID} className={item.className}/>
     
            ))}
            </div>
        </div> 
    )
    

}