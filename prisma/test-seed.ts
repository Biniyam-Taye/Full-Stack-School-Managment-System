import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding...");
    const admin = await prisma.admin.create({
        data: {
            id: "admin_test",
            username: "admin_test",
        },
    });
    console.log("Created admin:", admin);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
