// app/api/drive-images/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleDriveImages } from "../../../../lib/drive";

const API_KEY = process.env.API_KEY;

export async function GET(req: NextRequest) {
    if (!isValidApiKey(req)) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    const edition =
        req.nextUrl.searchParams.get("edition");

    if (edition !== "2025" && edition !== "2026") {
        return NextResponse.json(
            { error: "Invalid edition" },
            { status: 400 }
        );
    }

    const folderId =
        edition === "2025"
            ? process.env.GOOGLE_DRIVE_FOLDER_ID_2025
            : process.env.GOOGLE_DRIVE_FOLDER_ID_2026;

    if (!folderId) {
        return NextResponse.json(
            {
                error: `GOOGLE_DRIVE_FOLDER_ID_${edition} not set in env`,
            },
            { status: 500 }
        );
    }

    try {
        const urls =
            await fetchGoogleDriveImages(folderId);

        return NextResponse.json(urls);
    } catch (error) {
        console.error(
            "Error fetching Drive images:",
            error
        );

        return NextResponse.json(
            {
                error:
                    "Failed to fetch images from Drive",
            },
            { status: 500 }
        );
    }
}

function isValidApiKey(req: NextRequest): boolean {
    const apiKey = req.headers.get("x-api-key");
    return apiKey === API_KEY;
}