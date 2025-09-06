import css from "./allTopics.module.css";
import Navigation from "../navigation/Navigation";
import DogVaccineTable from "./DogVaccineTable";

const DogVaccinationSchedule = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1 className={css.h1}>Köpek Aşı Takvimi</h1>
        <p>
          Yavru köpeklerin sağlıklı bir bağışıklık sistemi geliştirebilmesi için
          aşı takvimi dikkatle takip edilmelidir. Aşılamaya başlamadan önce,
          köpeğinizin genel sağlık durumu ve kilosu veteriner hekiminiz
          tarafından değerlendirilmelidir.
        </p>
        <h2 className={css.h2}>Yeni Doğan Köpeklerde Aşılamaya Başlama</h2>
        <p>
          Yeni doğan köpeklerin yaklaşık 45 gün boyunca anne sütü alması
          önerilir. Bu sürenin sonunda, yavrunun kilosu uygunsa (minimum 800
          gram, tercihen 1 kg ve üzeri) aşı programına başlanabilir.
          <br />
          İlk adım olarak iç ve dış parazit tedavisi yapılır. Bu tedaviden 1
          hafta sonra aşılama programına başlanabilir.
        </p>
        <h4>Aşı Programının Temel Kuralları</h4>
        <ul>
          <li>
            Karma, corona, bronşin ve lyme aşılrı yavru köeklerde iki doz olarak
            uygulanır
          </li>
          <li>kuduz ve mantar aşıları bir doz olarak uygulanır</li>
          <li>Aşılar arasında ideal bekleme süresi: 3 hafta</li>
          <li>
            Parazit uygulamaları: İki ayda bir tekrarlanması önerilir. Uygulanan
            preparata göre üç aylık seçeneklerde bulunmaktdır
          </li>
        </ul>
        <h4>Uygulanabilecek Aşılar</h4>
        <ul>
          <li>Primadog</li>
          <li>Puppy DP</li>
          <li>Karma Aşı (Da2PPiL)</li>
          <li>Corona</li>
          <li>Bronşin (Bordetella)</li>
          <li>Lyme</li>
          <li>Kuduz</li>
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
          <li>(1 hafta sonra) Primadog</li>
          <li>(1 hafta sonra) Puppy DP</li>
          <li>(3 hafta sonra) Karma 1</li>
          <li>(3 hafta sonra) Karma 2</li>
          <li>(3 hafta sonra) Corona 1</li>
          <li>(3 hafta sonra) Corona 2</li>
          <li>(3 hafta sonra) Kuduz</li>
          <li>(3 hafta sonra) Bronşin 1</li>
          <li>(3 hafta sonra) Bronşin 2</li>
          <li>(3 hafta sonra) Lyme 1</li>
          <li>(3 hafta sonra) Lyme 2</li>
        </ol>
        <p>
          <span>Not:</span> Corona ve Bronşin aşılarının sırası veteriner
          hekiminize göre değişebilir. Bazı durumlarda bu iki aşı, araya 1 hafta
          koyularak hızlandırılmış takvimle yapılabilir. Ancak özellikle küçük
          ırk köpeklerde hızlı aşı takvimi önerilmez.
        </p>
        <h4>Tarihli Örnek Aşı Takvimi (1 Ocak Doğumlu Yavru Köpek)</h4>
        <DogVaccineTable />
        <h2 className={css.h2}>Yetişkin Köpeklerde Aşılama</h2>
        <p>
          Köppekler bir yaşından sonra aşılama artık rutin tarihlerde yapılır.
          Karma, corona,bronşin, lyme ve kuduz aşıları yılda bir sefer yapılır. Son
          yaptırdığınız tarihe göre her sene aynı tarihte tekrarı yapılır.
          Yukarıdaki tabloya göre her 12 Nisan'da karma, her 24 Mayıs'ta corona, 14 Haziran'da kuduz, 26 Temmuz'da bronşin ve 6 Eylül'de lyme aşıları tekrarı yapılacak.
        </p>
        <h2 className={css.h2}>Parazit Uygulamaları</h2>
        <p>Köpekler için çeşitli parazit uygulama methotları bulunmaktadır.
          İç ve dış parazit için ayrı ayrı tablet veya damla uygulayabilir ya da ikisinin birlikte olduğu tabletler 
          kullanabilirsiniz. Parazit uygulamaları genellikle iki ayda bir tekrarlanması önerilir. Ancak bazı preparatlar üç aylık seçeneklerde de bulunabilir.
          Parazit uygulamaları, köpeğinizin yaşına, kilosuna ve sağlık durumuna göre değişiklik gösterebilir. Bu nedenle, en uygun parazit uygulama programını belirlemek için veteriner hekiminizle görüşmeniz önemlidir.
        </p>
      </div>
    </>
  );
};
export default DogVaccinationSchedule;
