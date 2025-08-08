import Navigation from "../navigation/Navigation";
import css from "./allTopics.module.css";
import CatVaccineTable from "./CatVaccineTable";

const CatVaccinationSchedule = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1>Kedi Aşı Takvimi</h1>
        <p>
          Yavru kedilerin sağlıklı bir bağışıklık geliştirebilmesi için aşı
          takvimi dikkatle takip edilmelidir. Aşağıda kediler için ideal aşılama
          programı ve detaylı bilgiler yer almaktadır.
        </p>
        <h2>Yeni Doğan Kedilerde Aşılamaya Başlama</h2>
        <p>
          Yeni doğan yavru kedilerin yaklaşık 45 gün boyunca anne sütü alması
          önerilir. Bu süre sonunda, eğer yavrunun kilosu uygunsa (minimum 800
          gram, tercihen 1 kg ve üzeri), aşı programına başlanabilir.
          <br />
          İlk adım olarak iç ve dış parazit tedavisi uygulanır. Bu tedaviden bir
          hafta sonra ilk karma aşı yapılabilir.
        </p>
        <h4>Aşı Programının Temel Kuralları</h4>
        <ul>
          <li>
            Karma ve lösemi aşıları yavru kedilerde iki doz halinde uygulanır.
          </li>
          <li>Kuduz ve mantar aşıları, tek doz şeklindedir.</li>
          <li>Aşılar arasında ideal bekleme süresi: 3 hafta</li>
          <li>Parazit uygulamaları: İki ayda bir tekrarlanması önerilir.</li>
        </ul>
        <h4>Uygulanabilecek Aşılar</h4>
        <ul>
          <li>Karma Aşı (Panleukopeni, Calicivirus, Herpesvirus)</li>
          <li>Lösemi Aşısı (FeLV)</li>
          <li>Kuduz Aşısı</li>
          <li>
            Mantar Aşısı Not: Mantar aşıları genellikle sadece tek bir mantar
            türüne karşı koruma sağlar ve rutin aşılara göre daha maliyetlidir.
            Bu nedenle veteriner hekimler, genellikle mantar aşısını rutin
            programa dahil etmezler. Ancak daha geniş kapsamlı bir bağışıklık
            isteyen ve "garantici" sahipler için mantar aşısı da yapılabilir.
          </li>
        </ul>
        <h4>Tarihsiz Örnek Aşı Programı</h4>
        <ol>
          <li>İç–dış parazit uygulaması</li>
          <li>(1 hafta sonra) Karma 1</li>
          <li>(3 hafta sonra) Karma 2</li>
          <li>(3 hafta sonra) Lösemi 1</li>
          <li>(2 hafta sonra) Parazit uygulaması</li>
          <li>(1 hafta sonra) Lösemi 2</li>
          <li>(3 hafta sonra) Kuduz aşısı</li>
        </ol>
        <h4>Tarihli Örnek Aşı Takvimi (1 Ocak Doğumlu Yavru Kedi)</h4>
        <CatVaccineTable />
        <h2>Yetişkin Kedilerde Aşılama</h2>
        <p>
          Kediler bir yaşından sonra aşılama artık rutin tarihlerde yapılır.
          Karma, lösemi ve kuduz aşıları yılda bir sefer yapılır. Son
          yaptırdığınız tarihe göre her sene aynı tarihte tekrarı yapılır.
          Yukarıdaki tabloya göre her 15 Mart'ta karma, her 26 Nisan'da lösemi
          ve her 17 Mayıs'ta kuduz aşıları tekrarı yapılacak. Parazit tedavisi
          ortalama olarak her iki ayda bir düzenli yapılması hem sizin hemde
          kedinizin sağlığı için önemlidir.
        </p>
      </div>
    </>
  );
};
export default CatVaccinationSchedule;
