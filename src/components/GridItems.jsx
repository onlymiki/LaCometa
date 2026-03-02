import Item from "./Item";

function GridItems({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-[1400px] mx-auto w-full px-8 lg:px-20 py-12 border border-gray-200">
      {items.length > 0 ? (
        items.map((pizza, index) => (
          <Item
            key={index}
            title={pizza.title}
            ingredients={pizza.ingredients}
            price1={pizza.price1}
            price2={pizza.price2}
          />
        ))
      ) : (
        <p className="text-center col-span-2 py-10 text-gray-500">
          Nessuna pizza trovata in questa categoria.
        </p>
      )}
    </div>
  );
}

export default GridItems;
