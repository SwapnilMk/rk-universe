import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';
config({ path: '.env' });

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@rkuniverses.com';
  const plainPassword = 'Rkuniverse@123';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      role: 'admin',
    },
    create: {
      email,
      password: hashedPassword,
      role: 'admin',
      name: 'Admin User',
    },
  });

  console.log(`Admin user seeded successfully: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
