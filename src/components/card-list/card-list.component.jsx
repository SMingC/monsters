import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = (props) => {
  // console.log(this.props.monsters);
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
