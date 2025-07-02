
import { NextRequest, NextResponse } from "next/server";
import { createConnection } from '../../../lib/db'
var sql = require('mssql');


export async function POST(req:NextRequest, res:NextResponse) {
    //Get the Form Data
    const Formdata = await req.formData();
    const url = Formdata.get('url');
    const artist = Formdata.get('artist');
    const song = Formdata.get('song');
    const category = Formdata.get('category');

 try
 {
    const data = { url: url, artist: artist, song:song, category: category};
    const values = [url, artist, song, category];

    const db = await createConnection()
  
    const sqlQuery = 'INSERT INTO music (url, artist, songName, category) VALUES (@url, @artist, @song, @category)';
    const request = await db.request();
    request.input('url', sql.NVarChar, url);
    request.input('artist', sql.NVarChar, artist);
    request.input('song', sql.NVarChar, song);
    request.input('category', sql.NVarChar, category)
                
    await request.query(sqlQuery, values);
 
    return NextResponse.json({ message: 'Success' }, { status: 200 });

 }
  catch(err)
  {
      return NextResponse.json({ error: err}, { status: 400 });
     
  }

}

