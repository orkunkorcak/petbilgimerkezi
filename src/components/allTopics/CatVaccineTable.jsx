

const CatVaccineTable = () => {
  const schedule = [
    { date: "1 Ocak", application: "Doğum" },
    { date: "15 Şubat", application: "İç–dış parazit" },
    { date: "22 Şubat", application: "Karma 1" },
    { date: "15 Mart", application: "Karma 2" },
    { date: "5 Nisan", application: "Lösemi 1" },
    { date: "15 Nisan", application: "İç–dış parazit" },
    { date: "26 Nisan", application: "Lösemi 2" },
    { date: "17 Mayıs", application: "Kuduz aşısı" },
    { date: "15 Haziran", application: "İç–dış parazit (rutin devam)" },
  ];

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <table
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}
      >
        <thead style={{ backgroundColor: "#f8f8f8" }}>
          <tr>
            <th
              style={{
                border: "1px solid #ca5454",
                padding: "10px",
                color: "#ca5454",
                fontFamily: "Comic Sans MS",
              }}
            >
              Tarih
            </th>
            <th
              style={{
                border: "1px solid #ca5454",
                padding: "10px",
                color: "#ca5454",
                fontFamily: "Comic Sans MS",
              }}
            >
              Uygulama
            </th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ca5454",
                  padding: "10px",
                  color: "#292d54",
                  fontFamily: "Comic Sans MS",
                }}
              >
                {item.date}
              </td>
              <td
                style={{
                  border: "1px solid #ca5454",
                  padding: "10px",
                  color: "#292d54",
                  fontFamily: "Comic Sans MS",
                }}
              >
                {item.application}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatVaccineTable;
