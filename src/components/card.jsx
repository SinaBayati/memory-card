import "./../styles/card.css";

export function Card({ imageUrl, altText, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={altText} />
      <h2>{altText}</h2>
    </div>
  );
}