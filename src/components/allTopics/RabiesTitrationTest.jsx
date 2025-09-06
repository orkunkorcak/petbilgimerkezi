import css from "./allTopics.module.css"
const RabiesTitrationTest = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.h1}>Kuduz Titrasyon Testi</h1>
        <p>
          Kuduz titrasyon testi, vücudun kuduz hastalığına karşı geliştirdiği
          bağışıklık seviyesini ölçen bir testtir. Ülkemiz, kuduz hastalığı
          açısından Avrupa ve Amerika tarafından riskli ülkeler kategorisinde
          değerlendirildiğinden, yurt dışına çıkışlarda bu test zorunlu olarak
          istenmektedir. Zaten Türkiye’de her yıl düzenli olarak kuduz aşısı
          yapılması da zorunludur.
          <br />
          Bu test sayesinde, kuduz aşısı sonrasında vücutta oluşan antikor
          düzeyi ölçülerek belgelendirilir. Kuduz aşısından sonra minimum 0,5
          IU/ml antikor titresi, koruyucu seviye olarak kabul edilir.
        </p>
        <h2 className={css.h2}>Testi Kimler Yaptırmalıdır?</h2>
        <p>
          Bu test, Türkiye’de yaşayan ve evcil hayvanıyla birlikte yurt dışına
          çıkmak isteyen kişilerin kedi ve köpekleri için zorunludur. Eğer yurt
          dışına çıkma gibi bir planınız yoksa, bu testi yaptırmanız zorunlu
          değildir.
        </p>
        <h2 className={css.h2}>Test Nerede Yapılır?</h2>
        <p>
          Kuduz titrasyon testinin diğer ülkelerde geçerli olabilmesi için,
          testi yapan laboratuvarın uluslararası akreditasyon sertifikasına
          sahip olması gerekir. Türkiye’de bu sertifikaya sahip tek laboratuvar,
          T.C. Tarım ve Orman Bakanlığı Ankara Veteriner Kontrol Merkez
          Araştırma Enstitüsü Laboratuvarıdır. Titrasyon testi yalnızca burada
          yapılmaktadır.
        </p>
        <h2 className={css.h2}>Test İçin Gerekli Belgeler Nelerdir?</h2>
        <p>
          Testin yapılabilmesi için sevimli dostunuzun:
          <ul>
            <li>Mikroçip takılmış olması,</li>
            <li>Ev hayvanı pasaportunun bulunması,</li>
            <li> PetVet sistemine kayıt edilmiş olması gerekir.</li>
            Ardından kuduz aşısı yapılmalı ve aşının üzerinden en az 30 gün
            geçmiş olmalıdır. Hem aşı kaydı hem de test başvurusu PetVet sistemi
            üzerinden yapılmaktadır. Bu nedenle önce mikroçip takılıp sistem
            kaydı tamamlanmalı, ardından kuduz aşısı uygulanmalıdır.
          </ul>
        </p>
        <h2 className={css.h2}>Test Nasıl Yapılır?</h2>
        <p>
          Test, kan serumu örneği üzerinden yapılır. Sizin yapmanız gereken tek
          şey, kliniğinizden randevu alıp sevimli dostunuzdan yeterli miktarda
          kan alınmasını sağlamaktır. Geri kalan tüm işlemler veteriner
          kliniğiniz tarafından yürütülür.
          <br />
          Alınan kan örneği santrifüj ile seruma dönüştürülür, serum soğuk
          zincir kurallarına uygun şekilde ilgili laboratuvara gönderilir. Test
          sonucu kliniğinize ulaştırılır. Sonuçlar genellikle 3 ile 8 hafta
          arasında çıkmaktadır.
        </p>
        <h2 className={css.h2}>Test Ücreti Nereye Ödenir?</h2>
        <p>
          Kuduz titrasyon testinin ücreti, diğer veteriner hizmetlerinde olduğu
          gibi, Veteriner Hekimler Odası tarafından belirlenmektedir. Ücretler
          il ve bölgeye göre değişiklik gösterebilir. Test için belirlenen
          ücreti, işlemi yaptırdığınız kliniğe ödersiniz. Klinik, bu ücretle
          sizin adınıza referans laboratuvar bedelini, kargo, ekipman ve işçilik
          gibi giderleri karşılar.
        </p>
        <h2 className={css.h2}>Testin Geçerlilik Süresi Nedir?</h2>
        <p>
          Kuduz titrasyon testi sonucu başarılı geldiyse, test ömür boyu
          geçerlidir. Ancak bunun tek bir şartı vardır: Kuduz aşısının her yıl,
          zamanında yapılmış olması gerekir.
          <br />
          Örneğin kuduz aşısı 13 Temmuz’da
          yapıldıysa ve test sonucu başarılı geldiyse, her yıl en geç 13
          Temmuz’da kuduz aşısını yaptırmanız gerekir. Eğer bir yıl bile 14
          Temmuz’da yapılırsa test geçerliliğini kaybeder ve yeni bir titrasyon
          testi yapılması gerekir.
          <br/>
          Bunun önüne geçmek için her yıl bir-iki gün
          daha erken aşı yaptırmanız tavsiye edilir. Örneğin bu yıl 13 Temmuz’da
          yapılan aşı, gelecek yıl 12 Temmuz’da, bir sonraki yıl ise 11
          Temmuz’da yapılabilir. Bu şekilde test sonucunuzun geçerliliği sürekli
          olarak korunmuş olur.
        </p>
      </div>
    </>
  );
};
export default RabiesTitrationTest;
