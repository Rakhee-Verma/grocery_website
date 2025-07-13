import { useState } from "react";
import { ConstentData } from "../Context/ConstentData";
const uniqueList = [ ...new Set(ConstentData.map(e => e.name))];
export const CategoryModal = ({ closeCategoryModal }) => {
  const [searchItem, setSearchItem] = useState(ConstentData);
  const filterItem = (name) => {
    const list = (name === "All")
      ? ConstentData
      : ConstentData.filter(e => e.name === name);
    setSearchItem(list);
    closeCategoryModal(list);
  };

  return (
    <div className="contain-modal">
      <ul className="all-list">
        {uniqueList.map(item => (
          <li key={item} onClick={() => filterItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
