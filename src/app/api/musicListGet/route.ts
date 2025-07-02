
import { createConnection } from '../../../lib/db'
import { NextResponse } from 'next/server'
import SanitiseInput from '../../../lib/sanitizer'

const sql = require('mssql')


export async function GET(request: Request, response: Response) {
    try{
         const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const searchTerm = SanitiseInput(searchParams.get("search")); 
   
        const db = await createConnection()
        let sql = 'select music.*, mc.className from music left outer join musiccategories mc on music.category = mc.category'
        if (searchTerm !="")
        {
            sql += " where music.artist like '%"+ searchTerm  + "%' or music.songName like '%" + searchTerm + "%' or mc.category like '%" + searchTerm + "%'"
        }
         const result =await db.request().query(sql)
       
        return NextResponse.json({musicItems: result.recordset})
        
    }
    catch(err)
    {
        console.log(err)
        return "test"
       
    }
}


