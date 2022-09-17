import { NextApiRequest, NextApiResponse } from "next";
import { getTeams } from '../../../lib/teams/findTeams';


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if(method === "GET"){
    const teamList = await getTeams();
  
    return res.status(200).json({
      data: teamList,
    })
  }
  
 return res.status(404).json({ message: "Route not found"})
}