import css from "../allTopics/allTopics.module.css";
import Navigation from "../navigation/Navigation";

const AbroadWithDog = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1 className={css.h1}>Köpeğimle Yurtdışına Çıkmak</h1>
        <p>
          Köpek ile yurtdışına çıkmak, sıradan bir seyahatten daha fazla
          hazırlık ve resmi işlem gerektirir. Eğer seyahatiniz kısa süreliyse
          köpeğinizi güvendiğiniz bir yakınınıza emanet edebilir ya da güvenilir
          bir pet pansiyonuna bırakabilirsiniz. Ancak uzun süreli bir yurtdışı
          planınız varsa, dostunuzu yanınızda götürmeniz gerekir. Bu durumda
          belirli belgeler ve prosedürleri tamamlamanız şarttır.
        </p>
        <h2 className={css.h2}>Yurtdışı Çıkış İçin Gerekli Belgeler</h2>
        <ul>
          <li>Mikroçip ve Evcil Hayvan Pasaportu</li>
          <li>Kuduz Aşısı (nadir bazı ülkeler için karma aşı)</li>
          <li>
            İç–Dış Parazit Tedavisi (özellikle iç parazit gideceğiniz ülkede
            bilinen bir preparat olmalı)
          </li>
          <li>Kuduz Titrasyon Testi (çoğu ülkeler için zorunlu)</li>
          <li>Yurtdışı Çıkış Belgesi (il/ilçe tarım müdürlüklerinden)</li>
          <li>Sağlık Raporu</li>
          <li>
            ABD için CDC Onayı (Amerika’ya girişlerde köpekler için ek bir
            şarttır)
          </li>
        </ul>
        <h2 className={css.h2}>Adım Adım Yapmanız Gerekenler</h2>
        <ol>
          <li>
            <h4>Mikroçip ve Pasaport</h4>
            <p>
              Köpeğinizin mikroçipi bulunmalı ve ev hayvanı pasaportu
              düzenlenmiş olmalıdır.
            </p>
          </li>
          <li>
            <h4>Kuduz Aşısı</h4>
            <p>
              Mikroçip takıldıktan sonra kuduz aşısı yapılmalıdır. Daha önce
              yapılmış olan kuduz aşıları, mikroçip tarihinden önceyse geçerli
              sayılmaz.
            </p>
          </li>
          <li>
            <h4>Kuduz Titrasyon Testi</h4>
            <p>
              Kuduz aşısından en az 30 gün sonra titrasyon testi yapılır. Test
              sonucu yeterli antikor seviyesini gösterirse köpeğinizin yurtdışı
              çıkış hazırlıkları ilerleyebilir.
            </p>
          </li>
          <li>
            <h4>Uçak Rezervasyonu</h4>
            <p>
              Test sonucunuz olumlu geldikten sonra uçuş tarihini
              kesinleştirebilir ve biletinizi alabilirsiniz. Genellikle kan
              alımından sonra 90 gün karantina uygulaması istendiği için
              biletinizi titrasyon testi için kan alındıktan en az 90 gün
              sonrasına rezervasyon yaptırın.
            </p>
          </li>
          <li>
            <h4>ABD’ye Girişte CDC Onayı</h4>
            <p>
              ABD’ye köpek götürmek isteyenler için CDC (Centers for Disease
              Control and Prevention) onayı zorunludur. Özellikle kuduz riski
              taşıyan ülkelerden gelen köpekler için CDC’nin çevrimiçi başvuru
              sistemi üzerinden izin alınması gerekir. Bu izin olmadan köpekler
              ABD’ye giriş yapamaz. Ayrıca CDC, köpeğinizin en az 6 aylık
              olmasını, mikroçip taşımasını, geçerli kuduz aşısına sahip
              olmasını ve belgelerin resmi olarak ibraz edilmesini şart koşar.
            </p>
          </li>
          <li>
            <h4>Parazit Tedavisi ve Sağlık Raporu</h4>
            <p>
              Uçuştan en fazla 48 saat önce, köpeğinize iç–dış parazit uygulaması
              yapılmalıdır. Aynı klinik ziyaretinde veteriner hekiminizden
              sağlık raporunuzu da alabilirsiniz.
            </p>
          </li>
          <li>
            <h4>Tarım Müdürlüğü İşlemleri</h4>
            <p>
              Köpeğinizin pasaportu, titrasyon testi sonucu, uçak rezervasyonu
              ve sağlık raporu ile birlikte il/ilçe tarım müdürlüğüne başvurup
              Yurtdışı Çıkış Belgesi almanız gerekir. Bu belge düzenlendiği
              andan itibaren 48 saat geçerlidir. Süresi içinde Türkiye’den çıkış
              yapmazsanız belge geçerliliğini kaybeder. Tavsiyemiz: Aksaklık
              yaşamamak için uçuşunuzdan bir gün önce bu işlemleri
              tamamlamanızdır.
            </p>
          </li>
        </ol>
        <h2 className={css.h2}>Hangi Ülkeler Kuduz Titrasyon Testi İstiyor?</h2>
        <p>
          Kuduz titrasyon testi, köpeğinizin kuduz aşısına karşı yeterli
          bağışıklık geliştirip geliştirmediğini ölçer. Her ülke bu testi talep
          etmez. Ancak Avrupa Birliği ülkeleri başta olmak üzere birçok ülkeye
          girişte bu test zorunludur.
        </p>
        <h4>Titrasyon testi isteyen başlıca ülkeler:</h4>
        <ul>
          <li>
            Avrupa Birliği ülkeleri (örneğin: Almanya, Fransa, Hollanda, İtalya,
            İspanya, Belçika)
          </li>
          <li>ABD (CDC Onayı Zorunlu)</li>
          <li>İngiltere</li>
          <li>Norveç, İsviçre, İzlanda</li>
          <li>Rusya</li>
          <li>Japonya</li>
          <li>Güney Kore</li>
          <li>Avustralya ve Yeni Zelanda</li>
          <li>
            Bazı Orta Doğu ülkeleri (örn. Birleşik Arap Emirlikleri, Katar)
          </li>
        </ul>
        <p>
          Her ülkenin prosedürü farklı olabileceği için (ABD için eyaletler
          arası bile farklar mevcut), seyahat planınızdan önce gidilecek ülkenin
          resmi konsolosluk veya ilgili bakanlığın web sitesinden güncel kuralları
          mutlaka kontrol etmenizi tavsiye ederiz.
        </p>
      </div>
    </>
  );
};
export default AbroadWithDog;
