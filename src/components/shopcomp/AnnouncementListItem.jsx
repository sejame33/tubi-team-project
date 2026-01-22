import { useNavigate } from "react-router-dom";
import "./AnnouncementList.css";

const AnnouncementListItem = ({ id, icon, title, desc, time }) => {
  const navigate = useNavigate();

  return (
    <div
      className="announcement-item impl-anchor"
      data-impl
      onClick={() => navigate(`/home/shop/announcement/${id}`)}
    >
      <div className="item-left">
        <img src={icon} alt="" />
      </div>

      <div className="item-center">
        <div className="item-title">
          {title.map((t, i) => (
            <span key={i} style={{ color: t.color }}>
              {t.text}
            </span>
          ))}
        </div>
        <div className="item-desc">{desc}</div>
      </div>

      <div className="item-right">
        <span>{time}</span>
      </div>
    </div>
  );
};

export default AnnouncementListItem;
