import styles from '../styles/home.module.scss';

import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import { getTeams } from '../lib/teams/findTeams';


type Team = {
  id: number,
  name: string,
  logo: string
}

export default function Home({teamList}) {
  const [teams, setTeams] = useState<Team[]>([]);
  
  useEffect(() => {
    setTeams(teamList);
  },[]);


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Brazil FC</h1>
      <ul>
      {teams.map(team => 
        <li key={team.id}>
          <img src={team.logo} alt={`${team.name} logo`} />
          <strong>{team.name}</strong>
        </li>)}
      </ul>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const teamList = await getTeams();
  
  return {
    props: { 
      teamList,
    },
    // revalidate: 5,
  }
}
