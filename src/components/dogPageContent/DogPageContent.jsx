import css from "../allTopics/allTopics.module.css";
import RandomColorButton from "../randomColorButton/RandomColorButton";


const DogPageContent = () => {
  return (
    <>
      <RandomColorButton to="/kopek-asi-takvimi" text="Köpek Aşı Takvimi" />
      <RandomColorButton
        to="/kopek"
        text="Köpeğimle Veteriner Ziyaretine Hazırlanmak"
      />
      <RandomColorButton to="/kopek" text="Yurtdışına Çıkış" />
      <RandomColorButton to="/kopek" text="Köpek Kısırlaştırmak" />

      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    </>
  );
}
export default DogPageContent;