bash scripts/clear-generated.sh
prisma generate
bash scripts/move-type-graphql-to-fe.sh
bash scripts/clear-.prisma-fe.sh
bash scripts/copy-.prisma-to-fe.sh