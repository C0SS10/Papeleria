import bcrypt from "bcrypt";
import Prisma from "../../../../libs/prismaDB";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 8);

  const user = await Prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
