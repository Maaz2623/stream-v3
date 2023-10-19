import Movie from "@/lib/models/movie";
import { NextResponse } from "next/server";

export async function PUT({params}){
    const {slug} = params
    const movie = await Movie.findOne({slug})
    movie.likes = movie.likes+1
    return NextResponse.json({status: 200})
}