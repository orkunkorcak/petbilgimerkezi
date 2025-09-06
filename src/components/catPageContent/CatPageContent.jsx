import css from "../allTopics/allTopics.module.css";
import RandomColorButton from "../randomColorButton/RandomColorButton";

const CatPageContent = () => {
  return (
    <>
      <RandomColorButton to="/kedi-asi-takvimi" text="Kedi Aşı Takvimi" />
      <RandomColorButton
        to="/kediyle-veteriner-ziyareti"
        text="Kedimle Veteriner Ziyaretine Hazırlanmak"
      />
      <RandomColorButton
        to="/kediyle-yurtdisina-cikmak"
        text="Kedimle Yurtdışına Çıkış"
      />
      <RandomColorButton to="/kedi-kisirlastirmak" text="Kedi Kısırlaştırmak" />

      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    </>
  );
}
export default CatPageContent;