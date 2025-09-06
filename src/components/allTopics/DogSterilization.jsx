import css from "./allTopics.module.css";
import Navigation from "../navigation/Navigation";
const DogSterilization = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <h1 className={css.h1}>Köpek Kısırlaştırma</h1>
      <p>
        Köpek sahipleri için en önemli sağlık ve bakım kararlarından biri
        kısırlaştırmadır. Hem evcil dostunuzun ömrünü uzatmaya yardımcı olur hem
        de davranışlarını olumlu yönde etkiler. Ayrıca sokak hayvanı sayısının
        kontrol altına alınmasında büyük rol oynar.
      </p>
      <h2 className={css.h2}>Köpek Kısırlaştırma Nedir?</h2>
      <p>
        Kısırlaştırma, köpeklerin üreme yeteneğini ortadan kaldıran cerrahi bir
        işlemdir.
        <br />• Dişi köpeklerde: Yumurtalıkların (genellikle rahmin ile
        birlikte) alınmasıyla yapılır. (ovariohysterectomy = ovaryohisterektomi)
        <br />• Erkek köpeklerde: Testislerin alınmasıyla yapılır. (castration =
        kastrasyon)
      </p>
      <h2 className={css.h2}>Köpek Kısırlaştırmanın Faydaları</h2>
      <h4>Sağlık Faydaları:</h4>
      <p>
        • Dişi köpeklerde rahim iltihabı (pyometra) ve meme tümörü riskini
        azaltır.
        <br />• Erkek köpeklerde testis kanseri ve prostat problemlerini
        engeller.
        <br />• Genel olarak ömrü uzatır ve yaşam kalitesini artırır.
      </p>
      <h4>Davranışsal Faydaları:</h4>
      <p>
        • Dişilerde kızgınlık döneminde görülen huzursuzluk, çiftleşme isteği ve
        kanama ortadan kalkar.
        <br />• Erkeklerde saldırganlık, idrarla bölge işaretleme ve kaçma
        isteği azalır.
        <br />• Daha dengeli, sakin bir karakter gelişir.
      </p>
      <h4>Toplumsal Faydaları:</h4>
      <p>
        • Kontrolsüz doğumların önüne geçer.
        <br />• Barınaklarda ve sokaklarda sahipsiz yavru köpeklerin sayısını
        azaltır.
        <br />• Toplum sağlığı açısından da fayda sağlar.
      </p>
      <h2 className={css.h2}>Kısırlaştırma İçin En Uygun Zaman</h2>
      <p>
        • Genel olarak 6-12 ay arası en uygun dönem kabul edilir.
        <br />• Büyük ırk köpeklerde bazen biraz daha geç yapılması
        önerilebilir.
        <br />• En doğru zaman için mutlaka veteriner hekime danışılmalıdır.
      </p>
      <h2 className={css.h2}>Ameliyat Sonrası Dikkat Edilmesi Gerekenler</h2>
      <p>
        • Köpeğinizin ilk 24-48 saat boyunca sakin bir ortamda dinlenmesi
        gerekir.
        <br />• Yara bölgesi temiz tutulmalı, köpeğin dikişlerini yalaması
        engellenmelidir (koruyucu yaka önerilir).
        <br />• Veterinerin verdiği ilaçlar aksatılmamalıdır.
        <br />• 10-14 gün içinde dikiş kontrolü yapılır.
      </p>
      <h2 className={css.h2}>Köpek Kısırlaştırma Hakkında Yanlış Bilinenler</h2>
      <p>
        • ❌ “Dişi köpek bir kere doğurmalı, sonra kısırlaştırılmalı.” ➡ Bu
        doğru değildir, aksine erken kısırlaştırma sağlık risklerini azaltır.
        <br />• ❌ “Kısırlaştırma köpeğin kişiliğini değiştirir.” ➡ Saldırganlık
        ve kaygı gibi istenmeyen davranışlar azalır, karakteri ise değişmez.
        <br />• ❌ “Kısırlaştırılan köpek mutlaka kilo alır.” ➡ Doğru mama ve
        düzenli egzersizle kilo kontrolü sağlanabilir.
      </p>
      <p>
        Kısırlaştırma, yalnızca üremeyi engelleyen bir işlem değil, aynı zamanda
        köpeğinizin daha uzun, sağlıklı ve mutlu bir yaşam sürmesine yardımcı
        olan bir karardır.
        <br />
        Eğer köpeğinizi kısırlaştırmayı düşünüyorsanız, en doğru bilgiyi almak
        için veteriner hekiminizle görüşün. Unutmayın, bu karar sadece sizin
        köpeğinizin değil, toplumdaki diğer hayvanların da yaşamını olumlu
        yönde etkileyecektir
      </p>
    </div>
  );
};
export default DogSterilization;
