import React from "react";
import { Table } from "./style";

interface Mission {
  id: string;
  name: string;
  status: { name: string };
  net: string;
  image?: { image_url: string };
  url: string;
  launch_designator?: string;
  slug?: string;
  last_updated?: string;
}

interface MissionsTableProps {
  missions: Mission[];
}

const MissionsTable: React.FC<MissionsTableProps> = ({ missions }) => {

  return (
    <Table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Status</th>
          <th>Data</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <React.Fragment key={mission.id}>
            <tr>
              <td>
                {mission.image?.image_url ? (
                  <img
                    src={mission.image.image_url}
                    alt={mission.name}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                ) : (
                  "-"
                )}
              </td>
              <td>{mission.name}</td>
              <td>{mission.status?.name}</td>
              <td>{new Date(mission.net).toLocaleString("pt-BR")}</td>
              <td>
                <a href={mission.url} target="_blank" rel="noopener noreferrer">
                  Ver mais
                </a>
              </td>
              
            </tr>
                
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default React.memo(MissionsTable);
