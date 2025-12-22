import Image from "../../../assets/logo.jpeg";

const Logo = (props) => {
  const { className, width = "70px" } = props; // Menambahkan default width
  
  return (
    <img 
      src={Image} 
      alt="Logo" 
      className={className} 
      style={{ width: width, height: "auto" }} // Menggunakan inline style
    />
  );
};

export default Logo;