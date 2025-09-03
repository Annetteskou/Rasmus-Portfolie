import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ClientDetail() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("clients");
    const clientsData = JSON.parse(data) || [];
    const foundClient = clientsData.find((c) => c.id.toString() === id);
    setClient(foundClient);
  }, [id]);

  if (!client) return <p>Loading...</p>;

  return (
    <section>
      <h2>{client.name}</h2>
      <p>{client.description}</p>
    </section>
  );
}
