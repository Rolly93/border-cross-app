export default function Row() {
  const data = [
    {
      "unit": "s20",
      "Triler": "TA202351",
      "Cliente": "cliente",
      "Operacion": "Exportacion",
      "ReferenciaTransportista": "Track123456",
      "LLEGADA_PATIO_FECHA": "Recoleccion",
      "Salioa_de_patio": "Salida de patio",
      "Rojo_Mex": "Inspeccion",
      "New_Seal": "s2563",
      "Verde_MX_Fecha": "Verde Mex",
      "USA_Inspection": "Rejo USA",
      "Type_Inspection_USA": "GAMA",
      "New_Seal": "Nuevo sello",
      "clear_USA": "Verde USA",
      "Resguardo_Fecha": "07/09/25 17:00 resguardo",
      "Yard":"Patiot",
      "Delivery": "07/09/25 15:00",
      "Recieve": "JUAN",
      "complete": "yes"
    }
  ];

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={row.Embarque}> {/* Always include a unique key when mapping lists in React */}
        <td>{row.unit}</td>
        <td>{row.Triler}</td>
        <td>{row.Cliente}</td>
        <td>{row.Operacion}</td>
        <td>{row.ReferenciaTransportista}</td>
        <td>{row.LLEGADA_PATIO_FECHA}</td>
        <td>{row.Salioa_de_patio}</td>
        <td>{row.Rojo_Mex}</td>
        <td>{row.New_Seal}</td>
        <td>{row.Verde_MX_Fecha}</td>
        <td>{row.USA_Inspection}</td>
        <td>{row.Type_Inspection_USA}</td>
        <td>{row.New_Seal}</td>
        <td>{row.clear_USA}</td>
        <td>{row.Resguardo_Fecha}</td>
        <td>{row.Yard}</td>
        <td>{row.Delivery}</td>
        <td>{row.Recieve}</td>
        <td>{row.complete}</td>
        </tr>
      ))}
    </tbody>
  );
}