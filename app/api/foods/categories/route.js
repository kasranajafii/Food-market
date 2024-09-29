import { NextResponse } from "next/server";
import data from "@/models/food";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const difficulty = searchParams.get("difficulty");
    const time = searchParams.get("time");

    const filteredData = data.filter((item) => {
        const difficultyResult = item.details.filter(
            (detail) => detail.Difficulty && detail.Difficulty === difficulty
        );

        const timeResult = item.details.filter((detail) => {
            const cookingTime = detail["Cooking Time"] || "";
            const [timeDetail] = cookingTime.split(" ");
            if (time === "less" && timeDetail && +timeDetail <= 30) {
                return detail;
            } else if (time === "more" && +timeDetail > 30) {
                return detail;
            }
        });

        if (
            time &&
            difficulty &&
            timeResult.length &&
            difficultyResult.length
        ) {
            return item;
        } else if (!time && difficulty && difficultyResult.length) {
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item;
        }
    });

    return NextResponse.json(filteredData);
}
