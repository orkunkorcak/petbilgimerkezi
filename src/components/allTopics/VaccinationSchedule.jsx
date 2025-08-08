import { Link } from "react-router-dom";
import css from "./allTopics.module.css";

const VaccinationSchedule = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Kedi ve Köpeklerde Aşılama: Sağlıklı Bir Yaşamın Temeli</h1>
        <p>
          Evcil hayvanlarımız bizim için sadece birer hayvan değil; aynı zamanda
          sadık dostlarımız, aile üyelerimizdir. Onların sağlıklı, uzun ve
          kaliteli bir yaşam sürdürebilmeleri için temel veteriner bakımlarından
          biri de <strong>aşılamadır</strong>. Özellikle kedi ve köpeklerde, aşı
          uygulamaları ölümcül hastalıkların önlenmesinde hayati rol oynar.
        </p>

        <h2>Aşı Nedir? Nasıl Çalışır?</h2>
        <p>
          Aşılar, bağışıklık sistemine zararsız bir şekilde hastalığı tanıtıp,
          ileride aynı mikroorganizmayla karşılaşıldığında güçlü bir savunma
          oluşturmasını sağlar. Böylece hayvan, hastalığa yakalansa bile ya hiç
          hastalanmaz ya da hastalığı çok hafif atlatır.
        </p>

        <h2>Kedi ve Köpeklerde Neden Aşılama Yapılmalı?</h2>

        <h4>1. Ölümcül Hastalıklara Karşı Koruma</h4>
        <p>
          Kedi ve köpekler, kuduz, gençlik hastalığı (distemper), parvovirüs,
          panlökopeni, kedi lösemisi (FeLV) gibi ciddi ve çoğu zaman ölümcül
          seyreden hastalıklara karşı savunmasızdır. Bu hastalıklar hem hayvanın
          yaşam kalitesini düşürür hem de bazen insanlara bulaşabilir (örneğin
          kuduz).
        </p>

        <h4>2. Bulaşıcı Hastalıkların Yayılmasını Önleme</h4>
        <p>
          Sokakta veya toplu yaşam alanlarında bir arada bulunan hayvanlar
          arasında hastalıklar kolayca yayılabilir. Aşılı hayvanlar, virüsleri
          taşıma ve yayma riskini de azaltarak toplum sağlığına katkı sağlar.
        </p>

        <h4>3. Zoonotik Hastalıkların Önlenmesi</h4>
        <p>
          Bazı hastalıklar hayvanlardan insanlara bulaşabilir. Özellikle kuduz
          gibi zoonotik hastalıklar açısından aşılar sadece hayvanı değil, aynı
          zamanda insanları da korur.
        </p>

        <h4>4. Yasal Zorunluluklar</h4>
        <p>
          Birçok ülkede, kuduz gibi bazı aşılar yasal olarak zorunludur. Aşıları
          olmayan hayvanlar seyahat edemez, pansiyonlara kabul edilmez ve bazı
          bölgelerde sahiplerine ceza uygulanabilir.
        </p>
        <h3>
          Kedi ve köpeklere yapılan aşılar birbirinden farklıdır. Aşağıdaki
          bağlantılardan kedi veya köpekler için aşı takvimine ulaşabilirsiniz.
        </h3>
      </div>
      <div>
        <Link to= "/kedi-asi-takvimi" className={css.link}>Kedi Aşı Takvimi</Link>
        <Link to= "/kopek-asi-takvimi" className={css.link}>Köpek Aşı Takvimi</Link>
      </div>
    </>
  );
};
export default VaccinationSchedule;
