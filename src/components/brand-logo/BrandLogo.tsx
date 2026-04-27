import logo from "../../assets/logo.png";
import "./BrandLogo.css";
type BrandLogoProps = {
  className?: string;
  alt?: string;
  decorative?: boolean;
};

function BrandLogo({
  className = "",
  alt = "Logo de Jhojan Toro",
  decorative = false,
}: BrandLogoProps) {
  return (
    <>
    <img
      src={logo}
      alt={decorative ? "" : alt}
      aria-hidden={decorative}
      className={className}
    />
    <hr />
    Edition 0.0.1
    </>
  );
}

export default BrandLogo;
