import css from "../allTopics/allTopics.module.css";
import Navigation from "../navigation/Navigation";

const AbroadWithCat = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <h1 className={css.h1}>Kedimle Yurtdışına Çıkmak</h1>
        <p>
          Kedi ile yurtdışına çıkmak, sıradan bir yolculuktan biraz daha fazla
          hazırlık gerektirir. Eğer seyahatiniz kısa süreli olacaksa kedinizi
          evinde bırakmayı ve güvendiğiniz birinin düzenli olarak ziyaret
          etmesini ayarlayabilir veya bir pet pansiyondan destek alabilirsiniz.
          Ancak uzun süreli bir yurtdışı planınız varsa, kedinizi yanınızda
          götürmeniz gerekebilir. Bu durumda belli belgeler ve resmi işlemleri
          tamamlamanız şarttır.
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
        </ul>
        <h2 className={css.h2}>Adım Adım Yapmanız Gerekenler</h2>
        <ol>
          <li>
            <h4>Mikroçip ve Pasaport</h4>
            <p>
              Kedinizin mikroçipi bulunmalı ve ev hayvanı pasaportu düzenlenmiş
              olmalıdır.
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
              sonucu yeterli antikor seviyesini gösterirse kedinizin yurtdışı
              çıkış hazırlıkları ilerleyebilir.
            </p>
          </li>
          <li>
            <h4>Uçak Rezervasyonu</h4>
            <p>
              Test sonucunuz olumlu geldikten sonra uçuş tarihini
              kesinleştirebilir ve biletinizi alabilirsiniz. Genellikle kan
              alımından sonra 90 gün karantian uygulaması istendiği için
              biletinizi titrasyon testi için kan alındıktan en az 90 gün
              sonrasına rezervasyon yaptırın.
            </p>
          </li>
          <li>
            <h4>Parazit Tedavisi ve Sağlık Raporu</h4>
            <p>
              Uçuştan en fazla 48 saat önce, kedinize iç–dış parazit uygulaması
              yapılmalıdır. Aynı klinik ziyaretinde veteriner hekiminizden
              sağlık raporunuzu da alabilirsiniz.
            </p>
          </li>
          <li>
            <h4>Tarım Müdürlüğü İşlemleri</h4>
            <p>
              Kedinizin pasaportu, titrasyon testi sonucu, uçak rezervasyonu ve
              sağlık raporu ile birlikte il/ilçe tarım müdürlüğüne başvurup
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
          Kuduz titrasyon testi, kedinizin kuduz aşısına karşı yeterli
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
          <li>ABD</li>
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
export default AbroadWithCat;
