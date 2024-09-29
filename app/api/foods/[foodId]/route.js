import { NextResponse } from "next/server";
import data from "@/models/food";

export async function GET(req, params) {
    if (params && params?.params?.foodId) {
        let response;

        if (!data.find((item) => item.id.toString() === params.params.foodId))
            response = NextResponse.json(
                { error: "Food not found" },
                { status: 404 }
            );
        else {
            response = NextResponse.json(
                data.find((item) => item.id.toString() === params.params.foodId)
            );
        }
        return response;
    } else {
        return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }
}
