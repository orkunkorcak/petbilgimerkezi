import css from "./allTopics.module.css";

const TravelByPlane = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Uçakla Seyahat</h1>
        <p>
          Sevimli dostumuzla seyahat etmek keyifli bir deneyim sunar. Ancak
          uçakla seyahat, insanlar için bile ciddi prosedürler içeren bir ulaşım
          şekli olduğundan, evcil hayvanlarımız için de dikkat edilmesi gereken
          katı kurallar barındırır.
        </p>
        <h2>Kuduz Aşısı Zorunluluğu</h2>
        <p>
          Tüm hava yolu firmalarının ilk kontrol ettiği şart kuduz aşısıdır.
          Uçakla seyahat edebilmek için öncelikle kuduz aşısının yapılmış olması
          gerekir. Ancak aşı yapıldıktan sonra hemen seyahat edilemez. Kuduz
          aşısının ardından en az 30 gün beklenmelidir. Bu nedenle seyahatten
          önce aşı takviminizi iyi planlamanız önemlidir.
        </p>
        <h2>Çanta Boyutları ve Ağırlık Kısıtlaması</h2>
        <p>
          Her hava yolu firmasının kabin içi çanta ölçüleri farklı olabilir;
          ancak hepsinin ortak noktası, ağırlık sınırıdır. Taşıma çantası dahil
          maksimum 8 kg’a kadar olan evcil hayvanlar kabin içinde seyahat
          edebilir. Eğer sevimli dostunuz çantasıyla birlikte bu sınırı
          aşıyorsa, kargo bölümünde seyahat etmek zorunda kalır.
          <br />
          <span>Türk Hava Yolları için kafes ebatları:</span> 23 cm yükseklik,
          30 cm genişlik ve 40 cm uzunluk boyutlarını aşmamalıdır.Bagaj
          bölümünde taşınan evcil hayvanların kafes ebatları: 75 cm yükseklik,
          75 cm genişlik ve 125 cm uzunluk boyutlarını aşmamalıdır. Ağırlığı ise
          kafesiyle birlikte 50 kg’ı geçmemelidir.
          <br />
          <span>Pegasus hava yolları</span> için kafes boyutu en fazla 32x32x50
          ölçülerinde olabilir.
          <br />
          <span>AJet hava yolları</span> için kafes boyutu en fazla 23x30x40
          ölçülerinde olabilir.
        </p>
        <h2>Hangi Çanta Kullanılmalı</h2>
        <p>
          <span>Kabin İçi Yolculuk İçin:</span> Kumaş ya da delikli plastikten
          yapılmış, yüksek hava geçirgenliğine sahip çantalar tercih
          edilmelidir. Naylon oranı yüksek, hava sirkülasyonu yetersiz çantalar
          sera etkisi yaratabilir. Bu da evcil hayvanınızın çanta içinde hararet
          yapmasına ve bunalarak rahatsız olmasına yol açabilir.
          <br />
          <br />
          <span>Kargo Bölümü İçin:</span> Kargo bölümünde seyahat edecek
          hayvanlar için: Sert malzemeli, Darbeye dayanıklı, Geniş hacimli ve
          Bol hava delikli çantalar tercih edilmelidir. Her ne kadar hava yolu
          personelleri evcil dostunuzun güvenliğini sağlamak için özen gösterse
          de, uçuş sırasında bagajların yer değiştirmesi, çarpması gibi durumlar
          yaşanabilir. Bu yüzden çantanızın darbelere karşı koruyucu özellikte
          olması büyük önem taşır.
        </p>
        <h2>Uçakta Kaç Hayvan Taşınabilir?</h2>
        <p>
          Kabin içinde taşınabilecek hayvan sayısı hava yolu firmasına göre
          değişebilir. Ancak genel kurallar şunlardır: Aynı türden en fazla 4
          hayvan, Farklı türlerden ise en fazla 1’er hayvan kabinde taşınabilir.
          Örnek: Bir uçakta en fazla 4 kedi ya da 1 kedi ve 1 köpek birlikte
          seyahat edebilir. Bu kuralların esnetilip esnetilemeyeceği ilgili hava
          yolu şirketine bağlıdır.
        </p>
        <h2>Sakinleştirici Vermeli Miyim?</h2>
        <p>
          Uçak yolculukları; yüksek ses, kalkış ve iniş sarsıntıları, basınç
          değişimleri gibi birçok uyaran içerir. Sevimli dostunuz bu durumlara
          karşı yoğun stres yaşayabilir. Bu stresi önlemek için: Veteriner
          hekiminizin önereceği sakinleştirici ilaçlar veya Bitkisel bazlı
          takviyeler kullanılabilir. Ancak rastgele ilaç vermek kesinlikle
          önerilmez. Uygun çözüm için mutlaka veteriner hekiminize danışın.
        </p>
      </div>
    </>
  );
};
export default TravelByPlane;
