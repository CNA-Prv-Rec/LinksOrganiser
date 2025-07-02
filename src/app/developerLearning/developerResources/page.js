"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import DeveloperResourceCard from "../../components/developerResourceCard/developerResourceCard.tsx";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";


export default function developerResources() {
    const [developerResourceItems, setDeveloperItems] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

    useEffect(() => {
        const fetchData=async() => {
            console.log("fetching data")
            try{
                let url = '../../api/developerLinks?search='+searchTerm
                const data = await fetch(url)
                const response = await data.json()
                setDeveloperItems(response.developerLinks)
                console.log(response.developerResourceItems)
                console.log(developerResourceItems.length)
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
            <h3 className="heading">Developer Resources</h3>
            <br />
            Search: <input type="text" name="SearchBox" onChange={handleChange} className="borderedInput text-input w-full" />
            <br />
            <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
                <Link href="./developerResourceAddItem" className="base-btn btn-purple btn-space-around">Add</Link>
            </div>
          
           
            <div className="centered">
                <Table aria-label="developer resources table" className="dev-resources-table">
                    <TableHeader>
                        <TableColumn>Title</TableColumn>
                        <TableColumn>Category</TableColumn>
                    </TableHeader>
                    <TableBody>

                        {developerResourceItems.map(item => (
      

                            <TableRow key={item.ID}  className={item.className}>
                                <TableCell width="*">
                                    <a href={item.URL}>{item.title}</a>
                                    </TableCell>
                                <TableCell width="20%">
                                    {item.category}
                                </TableCell>
             
                            </TableRow>

                        ))}
                        
                    </TableBody>
                </Table>
            </div>
        </div> 
    )
    

}