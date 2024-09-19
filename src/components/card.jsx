import "./../styles/card.css";

export function Card({ imageUrl, altText }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={altText} />
      <h2>{altText}</h2>
    </div>
  );
}