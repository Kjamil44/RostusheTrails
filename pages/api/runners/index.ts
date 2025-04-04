import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

//GET AlL Runners -> GET api/runners
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const runners = await prisma.registeredRunner.findMany();
    res.status(200).json(runners);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}