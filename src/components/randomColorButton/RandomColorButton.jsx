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

const RandomColorButton = ({ text, to }) => {
  const [bgColor] = useState(getRandomColor());
  return (
    <Link
      to={to}
      style={{
        display: "inline-block",
        backgroundColor: bgColor,
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "15px",
        textDecoration: "none",
        margin: "10px 10px",
        gap: "10px",
        fontFamily: "Comic Sans MS, sans-serif",
        fontSize: "14px",
      }}
    >
      {text}
    </Link>
  );
};
export default RandomColorButton;