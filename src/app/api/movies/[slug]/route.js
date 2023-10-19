import { connectToDB } from "@/lib/mongoose";
import Movie from "@/lib/models/movie";
import { NextResponse } from "next/server";


export async function GET(request, {params}){
    const {slug} = params
    await connectToDB()
    const movie = await Movie.findOne({slug})
    return NextResponse.json(movie, {status: 200})
}


