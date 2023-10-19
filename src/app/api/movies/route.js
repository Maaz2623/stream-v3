import mongoose from "mongoose";
import { connectToDB } from "@/lib/mongoose";
import Movie from "@/lib/models/movie";
import { NextResponse } from "next/server";

export async function GET(){
    await connectToDB()
    const movies = (await Movie.find()).reverse()
    return NextResponse.json(movies, {status: 200})
}


