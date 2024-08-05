export default function Fruit({ name, price, emoji }) {
  return (
    <>
      {/* {emoji} {name} {price}{" "} */}

      {price > 10 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
