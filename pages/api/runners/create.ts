import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, fullName, age, trail, country } = req.body;

    try {
      const newRunner = await prisma.registeredRunner.create({
        data: {
          email,
          fullName,
          age,
          trail,
          country,
        },
      });

      res.status(201).json(newRunner);
    } catch (error) {
      res.status(500).json({ error: "Failed to create runner" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
