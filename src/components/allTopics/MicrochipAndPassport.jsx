import css from "./allTopics.module.css";

const MicrochipAndPassport = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.h1}>Mikroçip ve Ev Hayvanı Pasaportu</h1>
        <h2 className={css.h2}>Mikroçip Nedir?</h2>
        <p>
          Mikroçip, yaklaşık bir pirinç tanesi büyüklüğünde, medikal
          sertleştirilmiş camla kaplı, içerisinde RFID teknolojisi ile çalışan
          bir çip ve anten barındıran cihazdır. İçinde 15 haneli benzersiz bir
          kimlik numarası bulunur.
          <br />
          Herhangi bir enerji kaynağına sahip değildir. Mikroçipi okumak için
          özel bir cihaz yaklaştırıldığında aktifleşerek bu kimlik numarasını
          cihazla paylaşır. Bu numara artık sevimli dostunuzun TC kimlik
          numarası gibi kullanılacaktır.
        </p>
        <h2 className={css.h2}>Mikroçip Nasıl Uygulanır?</h2>
        <p>
          Mikroçipler, özel bir enjeksiyon iğnesi ile uygulanır. İğne steril
          ambalaj içinde gelir ve işlem anestezi gerektirmez, oldukça kısa
          sürer. Mikroçip, genellikle iki omuz arasındaki boşluğa (scapulalar
          arası cidago bölgesi) deri altına yerleştirilir.
        </p>
        <h2 className={css.h2}>Mikroçip Sonrası Nelere Dikkat Edilmeli?</h2>
        <p>
          Uygulama sonrası evcil hayvanınız normal yaşantısına devam edebilir,
          genellikle herhangi bir yan etki görülmez. Nadiren uygulama bölgesinde
          hafif bir kanama oluşabilir. Yine çok nadir durumlarda, mikroçip deri
          altından çıkabilir. Bu nedenle uygulama sonrası tüyler ayrılarak çipin
          dışarıda olup olmadığı hızlıca kontrol edilmelidir. Çip görünmüyorsa
          her şey yolunda demektir.
        </p>
        <h2 className={css.h2}>
          Mikroçip Ne İşe Yarar? Üzerine Bilgi Kayıt Edilir mi?
        </h2>
        <p>
          Sanılanın aksine mikroçipin üzerine bilgi kayıt edilmez. Mikroçip
          yalnızca bir kimlik numarasıdır. Bu numara, PETVET adlı dijital
          sisteme kayıt edilir. Kayıt işlemi yetkili veteriner kliniği veya
          il/ilçe tarım müdürlükleri tarafından yapılır. Önce sahip bilgileri
          sisteme girilir. Telefonunuza gelen doğrulama kodu yetkiliye iletilir.
          Ardından evcil hayvanınızın adı, doğum tarihi, ırkı, rengi, özel
          işaretleri, mikroçip numarası ve pasaport seri numarası gibi bilgiler
          sisteme eklenir.
        </p>
        <h2 className={css.h2}>Ev Hayvanı Pasaportu Nedir, Nasıl Alınır?</h2>
        <p>
          Mikroçip uygulandıktan sonra, işlemi yapan veteriner kliniği ya da
          tarım müdürlükleri tarafından size turkuaz renkli Ev Hayvanı Pasaportu
          verilir. Bu belge uluslararası geçerliliğe sahiptir. Pasaportta; evcil
          hayvanın kimlik bilgileri, sahip bilgileri, yapılan aşılar ve parazit
          uygulamaları yer alır.
        </p>
        <h2 className={css.h2}>Türkiye'de Mikroçip Takma Zorunlu mu?</h2>
        <p>
          Evet. Türkiye'de tüm sahipli kedi, köpek ve gelinciklere mikroçip
          takılması ve PETVET sistemine kayıt edilmesi zorunludur. Yetişkin
          hayvanlar için <span>son kayıt tarihi 31 Aralık 2025’tir.</span> Bu
          tarihten sonra kayıt yapılmamış hayvanlar için cezai işlem uygulanır
          ve veteriner kliniklerinde işlem yapılamaz.
        </p>
        <h2 className={css.h2}>Zaten Mikroçipi Olan Hayvanlar Ne Yapmalı?</h2>
        <p>
          Eğer patili dostunuzun daha önceden veya yurt dışında takılmış bir
          mikroçipi varsa, bu mikroçipin PETVET sistemine tanımlanması gerekir.
          Bunun için: Bulunduğunuz bölgedeki il/ilçe tarım müdürlüğüne
          başvurarak mikroçip numarasını entegre ettirebilirsiniz. Bu işlem
          sonrasında size yeni bir ev hayvanı pasaportu verilecektir.
        </p>
      </div>
    </>
  );
};
export default MicrochipAndPassport;
