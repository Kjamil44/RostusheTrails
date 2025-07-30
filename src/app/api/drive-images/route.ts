// app/api/drive-images/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleDriveImages } from "../../../../lib/drive"; // adjust path as needed

export async function GET(req: NextRequest) {
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