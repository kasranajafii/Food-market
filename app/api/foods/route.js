import { NextResponse } from "next/server";
import data from "@/models/food";

export async function GET() {
    return NextResponse.json(data);
}
