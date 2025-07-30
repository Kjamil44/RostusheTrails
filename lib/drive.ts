// lib/drive.ts
export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

export async function fetchGoogleDriveImages(folderId: string): Promise<string[]> {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  if (!apiKey) throw new Error("Missing GOOGLE_DRIVE_API_KEY env var");

  // query only image/* mimeTypes in the given folder
  const q = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/'`);
  const fields = encodeURIComponent("files(id,name,mimeType)");
  const url = `https://www.googleapis.com/drive/v3/files?key=${apiKey}&q=${q}&fields=${fields}`;

  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Drive API error: ${err}`);
  }

  const data = await res.json() as { files: DriveFile[] };
  // construct direct-view URLs
  return data.files.map(f => `https://drive.google.com/uc?export=view&id=${f.id}`);
}