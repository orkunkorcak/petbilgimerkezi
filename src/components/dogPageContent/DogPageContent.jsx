import css from "../allTopics/allTopics.module.css";
import RandomColorButton from "../randomColorButton/RandomColorButton";


const DogPageContent = () => {
  return (
    <>
      <RandomColorButton to="/kopek-asi-takvimi" text="Köpek Aşı Takvimi" />
      <RandomColorButton
        to="/kopekle-veteriner-ziyareti"
        text="Köpeğimle Veteriner Ziyaretine Hazırlanmak"
      />
      <RandomColorButton
        to="/kopekle-yurtdisina-cikmak"
        text="Köpeğimle Yurtdışına Çıkış"
      />
      <RandomColorButton
        to="/kopek-kisirlastirmak"
        text="Köpek Kısırlaştırmak"
      />

      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    </>
  );
}
export default DogPageContent;