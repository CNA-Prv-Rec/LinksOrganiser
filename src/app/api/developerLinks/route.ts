
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
        let sql = 'select dr.*, drc.className from developerresources dr left outer join developerresourcecategories drc on dr.category = drc.developerresourcecategory'
        if (searchTerm !="")
        {
            sql += " where dr.title like '%"+ searchTerm  + "%' or drc.developerresourcecategory like '%" + searchTerm + "%' or dr.description like '%" + searchTerm + "%'"
        }
        const result =await db.request().query(sql)
       
        return NextResponse.json({developerLinks: result.recordset})
        
    }
    catch(err)
    {
        console.log(err)
        return err
       
    }
}


