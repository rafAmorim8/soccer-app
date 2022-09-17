import { PrismaClient } from "@prisma/client";
// const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.teams.createMany({
    data: [
      { name: "Brazil FC",
        logo: "BrazilFC.png",
      },
      { name: "AC Fury",
        logo: "ACFury.png",
      },
      { name: "Bari FC",
        logo: "BariFC.png",
      },
      { name: "Burnaby Bulls FC",
        logo: "BurnabyBullsFC.png",
      },
      { name: "Europa FC",
        logo: "EuropaFC.png",
      },
      { name: "FC Ukraine",
        logo: "FCUkraine.png",
      },
      { name: "International Vancouver FC",
        logo: "InternationalVancouverFC.png",
      },
      { name: "Make FC",
        logo: "MakeFC.png",
      },
      { name: "Red Star FC",
        logo: "RedStarFC.png",
      },
      { name: "Roma FC",
        logo: "RomaFC.png",
      },
      { name: "Wanderers FC",
        logo: "WanderersFC.png",
      },
    ]   
  })

  console.log(result);
}

main();