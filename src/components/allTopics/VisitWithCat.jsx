import css from "./allTopics.module.css";
import Navigation from "../navigation/Navigation";

const VisitWithCat = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1 className={css.h1}>Kediyle Veteriner Ziyareti</h1>
        <p>
          Kedimiz hastalandığında, aşı ve parazit zamanı geldiğinde, rutin
          kontrol için ya da yurtdışına çıkmak istediğimizde mutlaka veteriner
          kliniğini ziyaret etmemiz gerekir. Peki kedimizi kliniğe nasıl
          hazırlamalıyız, nelere dikkat etmeliyiz?
        </p>
        <h2 className={css.h2}>Mutlaka Taşıma Çantası Kullanın</h2>
        <p>
          Kedinizin yolculuk sırasında kendini güvende hissetmesi ve stresinin
          azalması için taşıma çantası şarttır. Çantasız şekilde kucağınızda
          götürmek hem kediniz hem de sizin için risklidir.
          <br />
          • Taşıma çantasını önceden evin içinde bırakabilir, içine sevdiği bir
          battaniye veya oyuncak koyarak alışmasını sağlayabilirsiniz.
          <br />
          • Kedinizi çantasına koymadan önce mutlaka kum kabına koyun, yolda
          veya klinikte strese bağlı idrar veya dışkı yapmaması için evden
          çıkmadan yapmasını teşvik edin.
          <br />
          • Kliniğe geldiğinizde kedinizi çantasından hemen çıkarmayın.
          Veteriner klinikleri kediler için oldukça stresli ortamlardır ve
          içgüdüsel olarak saklanmak isterler.
          <br />• Veteriner hekim ve personeli gerekli olduğunda kedinizi
          güvenle çıkartacaktır.
        </p>
        <h2 className={css.h2}>Kliniğe Gitmeden Önce Mama Vermeli miyim?</h2>
        <p>
          • Eğer aşı veya parazit uygulaması için gidiyorsanız mama yemesinde
          bir sakınca yoktur.
          <br />• Ancak kan alınacaksa ya da bir hastalık şüphesi varsa aç
          karnına götürmek daha sağlıklı olur.
          <br /> • Su içmesinde genellikle bir sakınca yoktur. Fakat operasyon
          yapılacaksa veteriner hekiminiz hem mama hem su konusunda size özel
          talimat verebilir.
        </p>
        <h2 className={css.h2}>
          Kliniğe Gidişi Daha Rahat Hale Getirme İpuçları
        </h2>
        <p>
          • Kedinizin stresini azaltmak için taşıma çantasını bir örtü ile
          kapatabilirsiniz. Böylece dış uyaranlardan daha az etkilenir.
          <br />
          •Arabada yolculuk ederken ani hareketlerden kaçının, çantayı düz bir
          zemine sabitleyin.
          <br />• Ziyaret öncesinde feromon spreyleri veya spreylere benzer ürünler
          kullanmak kedinizin daha rahat hissetmesine yardımcı olabilir.
        </p>
        <h2 className={css.h2}>Veteriner Ziyareti Sırasında</h2>
        <p>
          • Kedinizin yanında siz sakin olursanız, o da kendini güvende
          hisseder. <br />• Veteriner hekime kedinizin sağlık geçmişini,
          alışkanlıklarını ve varsa gözlemlediğiniz sorunları detaylı şekilde
          anlatın.
          <br /> • İşlem bitene kadar kedinizi sakinleştirmeye çalışın,
          gerekirse çantasına geri koyarak dinlenmesine izin verin.
        </p>
        <h2 className={css.h2}>Ziyaret Sonrası Dikkat Edilecekler</h2>
        <p>
          • Aşı sonrası kedinizde kısa süreli halsizlik olabilir, bu normaldir.
          <br />• Eve döndüğünde ona sessiz, huzurlu bir ortam sağlayın. <br />•
          Veterinerin verdiği ilaç veya tavsiyeleri aksatmadan uygulayın.
        </p>
        <p>
          Kediniz için veteriner ziyareti bazen stresli olabilir, ancak doğru
          hazırlık ve bilinçli yaklaşım sayesinde bu süreci çok daha kolay hale
          getirebilirsiniz. Düzenli kontroller ve zamanında yapılan aşılar,
          kedinizin uzun ve sağlıklı bir yaşam sürmesinde büyük rol oynar.
        </p>
      </div>
    </>
  );
};
export default VisitWithCat;
