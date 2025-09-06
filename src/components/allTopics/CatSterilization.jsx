import css from "./allTopics.module.css";
import Navigation from "../navigation/Navigation";

const CatSterilization = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1 className={css.h1}>Kedi Kısırlaştırmak</h1>
        <p>
          Kedi sahipleri için en önemli kararlardan biri kısırlaştırmadır. Hem
          kedinizin sağlığı hem de sokaklardaki sahipsiz kedi nüfusunun kontrolü
          açısından büyük önem taşır. Peki kısırlaştırma nedir, ne zaman
          yapılmalıdır ve kedinizin hayatını nasıl etkiler?
        </p>
        <h2 className={css.h2}>Kedi Kısırlaştırma Nedir?</h2>
        <p>
          Kısırlaştırma, kedilerin üreme yeteneğini ortadan kaldıran cerrahi bir
          işlemdir.
          <br />• Dişi kedilerde: Yumurtalıkların (ve çoğu zaman rahmin)
          alınmasıyla yapılır (ovariohysterectomy = ovaryohisterektomi).
          <br />• Erkek kedilerde: Testislerin alınmasıyla yapılır (castration =
          kastrasyon).
        </p>
        <h2 className={css.h2}>Kısırlaştırmanın Faydaları</h2>
        <h4>Sağlık Açısından:</h4>
        <p>
          • Meme tümörü riskini büyük oranda azaltır .
          <br />• Rahim iltihabı (pyometra) riskini ortadan kaldırır.
          <br />• Erkeklerde testis kanseri ve prostat sorunlarını engeller.
        </p>
        <h4>Davranış Açısından:</h4>
        <p>
          • Dişi kedilerde sık sık tekrarlayan kızgınlık dönemleri sona erer.
          <br />• Dişi kedilerin erkek kedileri çağırmak için evde yankılı
          yerlerde yaptığı yüksek tonda miyavlama ve agresyon biter
          <br />• Erkek kedilerde bölge işaretleme (idrar püskürtme), kavgacılık
          azalır.
          <br />• Yüksek katlı apartmandan aşağıya çiftleşmek için aşağıya
          atlama ihtimali kalkar.
          <br />• Daha sakin ve uyumlu bir karakter gelişir.
        </p>
        <h4>Toplumsal Açıdan:</h4>
        <p>
          • Kontrolsüz üremenin önüne geçilir.
          <br />• Sokaklarda bakımsız yavru kedilerin doğması engellenir.
        </p>
        <h2 className={css.h2}>Kısırlaştırma Ne Zaman Yapılmalı?</h2>
        <p>
          • Her kedinin gelişimi farklıdır, en doğru zaman için veteriner hekime
          danışılmalıdır. Ancak genellikle dişilerde 7-12 ay erkeklerde 12 aydan
          sonra tercih edilir.
          <br />• Yeni bazı çalışmalarda dişi kedilerde 4-6 ay arası en uygun
          dönem kabul edilmiş, Kedinin ilk kızgınlığa girmeden kısırlaştırılması
          sağlık açısından avantajlı denilmiştir. Erkek kedilerde kısırlaştırma
          yapmak için iki testisin de keseye inmiş olması gerekmektedir
        </p>
        <h2 className={css.h2}>Ameliyat Sonrası Dikkat Edilmesi Gerekenler</h2>
        <p>
          • İlk 24 saat boyunca kedinizin sakin bir ortamda kalması gerekir.
          <br />• Yara bölgesi temiz tutulmalı, kedinin dikişlerini yalaması
          engellenmelidir (koruyucu yaka kullanılabilir).
          <br />• Veterinerin önerdiği ağrı kesici ve antibiyotikler düzenli
          verilmelidir.
          <br />• 7-10 gün içinde kontrol muayenesi yapılmalıdır.
        </p>
        <h2 className={css.h2}>
          Kısırlaştırma Hakkında Doğru Bilinen Yanlışlar
        </h2>
        <p>
          • ❌ “Kedi bir kere doğurmalı, sonra kısırlaştırılmalı.” ➡ Bilimsel
          bir dayanağı yoktur, aksine sağlık riskini artırır.
          <br />• ❌ “Kısırlaştırılan kedi mutlaka şişmanlar.” ➡ Uygun mama ve
          egzersizle kilo kontrolü sağlanabilir.
          <br />• ❌ “Doğal bir sürece müdahale etmeyelim.” ➡ Kısırlaştırma hem
          kedinin ömrünü uzatır hem de yaşam kalitesini artırır.
        </p>
        <p>
          Kısırlaştırma, kedinizin sağlığını koruyan, davranışlarını düzenleyen
          ve toplumsal fayda sağlayan en önemli adımlardan biridir. Eğer kediniz
          için bu kararı düşünüyorsanız, en doğru bilgiyi almak için güvenilir
          bir veteriner hekime danışmalısınız.
        </p>
      </div>
    </>
  );
};
export default CatSterilization;
