import "./directory-item.styles.scss";

import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const navigate = useNavigate();
  const handlerToPage = () => {
    navigate(`shop/${title}`);
  };

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body" onClick={handlerToPage}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
