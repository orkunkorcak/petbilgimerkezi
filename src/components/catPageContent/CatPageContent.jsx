import css from "../allTopics/allTopics.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const colors = [
  "#f4a261", // sıcak turuncu - kontrast
  "#2a9d8f", // turkuaz - tamamlayıcı
  "#e9c46a", // altın sarısı - enerjik
  "#6d597a", // mor ton - hero yazı rengine yakın
  "#457b9d", // mavi ton - hero arkaplana uyumlu
  "#ff6b6b", // canlı kırmızı - login butonuna yakın
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const RandomLinkButton = ({ text, href }) => {
  const [bgColor] = useState(getRandomColor());
  return (
    <Link
      to={href}
      style={{
        backgroundColor: bgColor,
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "15px",
        textDecoration: "none",
        margin: "10px 10px",
        gap: "10px",
      }}
    >
      {text}
    </Link>
  );
}

const CatPageContent = () => {
  return (
    <>
      <RandomLinkButton to="/kedi-asi-takvimi" text="Burada Bir Konu Başlığı Yazacak" />
      <RandomLinkButton to="/kedi-asi-takvimi" text="Burada Başka Bir Konu Başlığı Yazacak " />
      <RandomLinkButton to="/kedi-asi-takvimi" text="Bambaşka Bir Konu Başlığı" />
      <RandomLinkButton to="/kedi-asi-takvimi" text="Konu Başlığı Yazacak" />
      <Link className={css.pageLink} to="/kedi-asi-takvimi">Kedi Aşı Takvimi</Link>

      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    </>
  );
}
export default CatPageContent;