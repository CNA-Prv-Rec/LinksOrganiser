
import { NextRequest, NextResponse } from "next/server";
import { createConnection } from '../../../lib/db'
var sql = require('mssql');


export async function POST(req:NextRequest, res:NextResponse) {
    //Get the Form Data
    const Formdata = await req.formData();
    const url = Formdata.get('url');
    const title = Formdata.get('title');
    const description = Formdata.get('description');
    const category = Formdata.get('category');

 try
 {
    const data = { url: url, title: title, description:description, category: category};
    const values = [url, title, description, category];

    const db = await createConnection()
  
    const sqlQuery = 'INSERT INTO developerresources (url, title, description, category) VALUES (@url, @title, @description, @category)';
    const request = await db.request();
    request.input('url', sql.NVarChar, url);
    request.input('title', sql.NVarChar, title);
    request.input('description', sql.NVarChar, description);
    request.input('category', sql.NVarChar, category)
                
    await request.query(sqlQuery, values);
 
    return NextResponse.json({ message: 'Success' }, { status: 200 });
   
 }
  catch(err)
  {

      return NextResponse.json({ error: err}, { status: 400 });
     
  }

}

