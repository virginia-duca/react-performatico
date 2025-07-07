import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { CONNECTION, PALLETE } from "../../config/config";
import { Section } from "./style";
import MissionsTable from "./MissionTable";

export interface Mission {
  id: string;
  name: string;
  status: { name: string };
  net: string;
  url: string;
  image?: { image_url: string };
}

const Missions = () => {
  const [allMissions, setAllMissions] = useState<Mission[]>([]);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  
  useEffect(() => {
    axios
      .get(CONNECTION.LAUNCH_LIBRARY_URL)
      .then((res) => {
        setAllMissions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const statusOptions = useMemo(() => {
    const allStatus = allMissions.map((m) => m.status?.name).filter(Boolean);
    return Array.from(new Set(allStatus));
  }, [allMissions]);

  // Memoização do filtro
  const filteredMissions = useMemo(
    () =>
      allMissions.filter(
        (mission) =>
          mission.name?.toLowerCase().includes(filter.toLowerCase()) &&
          (statusFilter === "" || mission.status?.name === statusFilter)
      ),
    [allMissions, filter, statusFilter]
  );

  return (
    <Section>
      <h3 className="mission-title">Missoes</h3>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="text"
          placeholder="Filtrar por nome..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            marginBottom: 16,
            padding: 8,
            fontSize: 16,
            backgroundColor: PALLETE.darkGrey,
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            marginBottom: 16,
            padding: 8,
            fontSize: 16,
            backgroundColor: PALLETE.darkGrey,
            color: "#fff",
          }}
        >
          <option value="">Todos os status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <MissionsTable missions={filteredMissions} />
    </Section>
  );
};

export default Missions;
