import { useEffect, useState } from "react"
import Button from "./components/Button";

const App = () => {

  useEffect(() => {
    searchBicingFetch();
  }, []);

  const [bicing, setBicing] = useState([]);

  async function searchBicingFetch() {
    await fetch('https://api.citybik.es/v2/networks/bicing').then(res => res.json())
      .then(bicing => bicing.network).then(network => setBicing(network.stations));
  }

  function filterNumBicis(name) {
    console.log(name)
  }

  return (
    <div className="">
      <Button filterNumBicis={filterNumBicis} />
      <div className="flex justify-center">
        <table className="">
          <thead className="border-2 border-solid border-grey-500">
            <tr className="">
              <th className="border-2 border-solid border-grey-500">
                Nombre
              </th>
              <th className="border-2 border-solid border-grey-500">
                Bicis disponibles
              </th>
              <th className="border-2 border-solid border-grey-500">
                Slots Vacios
              </th>
              <th className="border-2 border-solid border-grey-500">Lat</th>
              <th className="border-2 border-solid border-grey-500">Long</th>
            </tr>
          </thead>
          <tbody className="py-10">
            {
              bicing.map(bici => {
                return (
                  <tr key={bici.id} className="">
                    <td >{bici.name}</td>
                    <td >{bici.free_bikes}</td>
                    <td >{bici.empty_slots}</td>
                    <td >{bici.latitude}</td>
                    <td >{bici.longitude}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
