import { NextResponse } from "next/server";
import { createApi } from 'unsplash-js';
import axios from 'axios';


export async function GET(request) {
    try {
        const unsplash = createApi({
            accessKey: `${process.env.UNSPLASH_API_KEY}`,
            axios: axios
        });

        const { searchParams } = new URL(request.url)
        const query = searchParams.get('query')
        const count = searchParams.get('count')
        console.log(query,count,request.url)
        const response = await unsplash.photos.getRandom({
            query: query,
            count:+count,
        });

        const pictures = response.response

        return NextResponse.json(pictures)
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}