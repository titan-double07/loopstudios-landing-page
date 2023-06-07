// import unsplash from "@/app/lib/unsplashInstance";
import { NextResponse } from "next/server";
import { createApi } from 'unsplash-js';
import axios from 'axios';

const unsplash = createApi({
  accessKey: `${process.env.UNSPLASH_API_KEY}`,
  axios:axios
});

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const per_page = searchParams.get('per_page')
  // console.log(searchParams)
  // console.log(query)
  // console.log(per_page)
  const response = await unsplash.search.getPhotos({
    query: query,
    per_page:+per_page,
  });
  
  const pictures = response.response.results
  
  
  return NextResponse.json(pictures)
}

