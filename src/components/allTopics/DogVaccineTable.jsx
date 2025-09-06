
const DogVaccinationSchedule = () => {
    const schedule = [
        { date: "1 Ocak", application: "Doğum" },
        { date: "15 Şubat", application: "İç–dış parazit" },
        { date: "22 Şubat", application: "Primodog" },
        { date: "1 Mart", application: "PuppyDp" },
        { date: "22 Mart", application: "Karma 1" },
        { date: "12 Nisan", application: "Karma 2" },
        { date: "3 Mayıs", application: "Corona 1" },
        { date: "24 Mayıs", application: "Corona 2" },
        { date: "14 Haziran", application: "Kuduz" },
        { date: "5 Temmuz", application: "Bronşin 1" },
        { date: "26 Temmuz", application: "Bronşin 2" },
        { date: "16 Ağustos", application: "Lyme 1" },
        { date: "6 Eylül", application: "Lyme 2" },
        
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
}
export default DogVaccinationSchedule;