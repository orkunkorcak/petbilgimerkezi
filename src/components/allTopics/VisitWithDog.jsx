import css from "./allTopics.module.css";
import Navigation from "../navigation/Navigation";

const VisitWithDog = () => {
    return (
      <div className={css.container}>
        <Navigation />
        <h1 className={css.h1}>Köpeğinizle Veteriner Ziyareti</h1>
        <p>
          Köpeklerimizin sağlığı için zaman zaman veteriner kliniğine gitmek
          gerekir. Aşı zamanı geldiğinde, rutin kontrol yapılacağında, hastalık
          belirtileri olduğunda ya da yurtdışına seyahat planlandığında mutlaka
          veteriner ziyareti yapılmalıdır. Peki köpeğimizi kliniğe götürmeden
          önce nasıl hazırlamalıyız?
        </p>
        <h2 className={css.h2}>Taşıma ve Yolculuk Hazırlığı</h2>
        <p>
          Küçük ırk köpekler için taşıma çantası, büyük ırklar içinse sağlam bir
          tasma (tercihen boyun tasması) ve gerektiğinde ağızlık
          kullanılmalıdır. Yolculuk sırasında köpeğinizin güvenliği ve çevreye
          zarar vermemesi için uygun ekipman kullanmak önemlidir. Arabada
          seyahat ederken köpeğinizin serbest dolaşmasına izin vermeyin; kemer
          aparatı veya taşıma kafesi kullanmak daha güvenlidir.
        </p>
        <h2 className={css.h2}>Kliniğe Gitmeden Önce Mama Vermeli miyim?</h2>
        <p>
          • Aşı ve rutin kontroller için gidiliyorsa mama yemesinde bir sakınca
          yoktur.
          <br />• Kan tahlili veya bazı tetkikler yapılacaksa köpeğinizin aç
          karnına olması gerekebilir.
          <br />• Operasyon öncesi ise veteriner hekiminizin tavsiyesine göre
          hem mama hem su tüketimi kısıtlanabilir.
        </p>
        <h2 className={css.h2}>Veteriner Ziyaretinde Stresi Azaltma İpuçları</h2>
        <p>
          • Köpeğinizi kliniğe götürmeden önce kısa bir yürüyüş yaptırmak hem
          enerjisini atmasına hem de daha sakin olmasına yardımcı olur.
          <br />• Sevdiği bir oyuncağını ya da battaniyesini yanınıza
          alabilirsiniz.
          <br />• Sizin sakin ve güven verici tavrınız, köpeğinizin de kendini
          rahat hissetmesini sağlar.
        </p>
        <h2 className={css.h2}>Klinik Sırasında Nelere Dikkat Etmeli?</h2>
        <p>
          • Köpeğinizi kliniğe girer girmez serbest bırakmayın, tasmasını takılı
          tutun. Klinikte diğer hayvanlar ve yabancılar olabilir, bu da
          köpeğinizin stresini artırabilir.
          <br />• Köpeğinizin sağlık geçmişini, varsa düzenli kullandığı
          ilaçları veteriner hekime mutlaka söyleyin.
          <br />• İşlem sırasında veterinerin yönlendirmelerine uyun, köpeğinizi
          zorla tutmaya çalışmayın. Gerekirse klinik personeli yardımcı olur.
          <br />• Büyük ve güçlü köpeklerde beklenmedik tepkiler için ağızlık
          kullanımı önerilebilir, bu hem sizin hem de veterinerin güvenliği için
          önemlidir.
        </p>
        <h2 className={css.h2}>Ziyaret Sonrası Dikkat Edilecekler</h2>
        <p>
          • Eve girmeden önce köpeğinizin tanıdığı bir alanda kısa bir yürüyüş
          yaptırmak rahatlamasına yardımcı olur.
          <br />• Aşı sonrası köpeğinizde hafif ateş, halsizlik veya iştahsızlık
          olabilir; bu genellikle kısa sürelidir.
          <br />• Eve döndüğünde ona dinlenebileceği sessiz bir alan sağlayın.
          <br />• Veterinerin verdiği ilaç ve bakım önerilerini aksatmadan
          uygulayın.
        </p>
        <p>
          Köpekler için veteriner ziyareti bazen stresli olabilir, ancak doğru
          hazırlık sayesinde bu süreci çok daha kolay hale getirebilirsiniz.
          Düzenli veteriner kontrolleri ve zamanında yapılan aşılar, köpeğinizin
          uzun ve sağlıklı bir ömür sürmesinde kritik rol oynar.
        </p>
      </div>
    );
};  
export default VisitWithDog;