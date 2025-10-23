// app/api/drive-images/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleDriveImages } from "../../../../lib/drive";

const API_KEY = process.env.API_KEY;

export async function GET(req: NextRequest) {
    if (!isValidApiKey(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
        return NextResponse.json(
            { error: "GOOGLE_DRIVE_FOLDER_ID not set in env" },
            { status: 500 }
        );
    }

    try {
        const urls = await fetchGoogleDriveImages(folderId);
        return NextResponse.json(urls);
    } catch (error) {
        console.error("Error fetching Drive images:", error);
        return NextResponse.json(
            { error: "Failed to fetch images from Drive" },
            { status: 500 }
        );
    }
}

function isValidApiKey(req: NextRequest): boolean {
    const apiKey = req.headers.get("x-api-key");
    return apiKey === API_KEY;
}