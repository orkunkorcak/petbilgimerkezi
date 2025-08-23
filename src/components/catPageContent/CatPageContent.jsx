import css from "../allTopics/allTopics.module.css";
import RandomColorButton from "../randomColorButton/RandomColorButton";

const CatPageContent = () => {
  return (
    <>
      <RandomColorButton to="/kedi-asi-takvimi" text="Kedi Aşı Takvimi" />
      <RandomColorButton
        to="/kedi"
        text="Kedimle Veteriner Ziyaretine Hazırlanmak"
      />
      <RandomColorButton
        to="/kedi"
        text="Yurtdışına Çıkış"
      />
      <RandomColorButton
        to="/kedi"
        text="Kedi Kısırlaştırmak"
      />

      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    </>
  );
}
export default CatPageContent;