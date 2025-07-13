import { ListItem } from './ListItem';
import './Main.css';

export const Home = ({ filterData, setProductId }) => {
  return (
    <ul className="container grid grid-four--cols">
      {filterData?.map(curElm => (
        <ListItem
          key={curElm.id}
          item={curElm}
          setProductId={setProductId}
        />
      ))}
    </ul>
  );
};
