import Item from "./Item";

function GridItems({ items }) {
  const isDrinks = items.length > 0 && items[0].category === "Bibite";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-[1400px] mx-auto w-full px-2 lg:px-20 py-8 border border-gray-200">
      {items.length > 0 ? (
        <>
          {/* intestazione colonne prezzi */}
          {!isDrinks && (
            <div className="flex items-center text-sm font-bold text-gray-600 uppercase col-span-full">
              <div className="flex w-full justify-end pe-4 gap-4">
                <span>Intera</span>
                <span>Trancio</span>
              </div>
              <div className="hidden md:flex w-full justify-end gap-4">
                <span>Intera</span>
                <span>Trancio</span>
              </div>
            </div>
          )}
          {isDrinks && (
            <div className="flex items-center text-sm font-bold text-gray-600 uppercase col-span-full">
              <div className="flex w-full justify-end pe-4">
                <span>Prezzo</span>
              </div>
              <div className="hidden md:flex w-full justify-end">
                <span>Prezzo</span>
              </div>
            </div>
          )}
          {items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              ingredients={item.ingredients}
              price1={item.price1}
              price2={item.price2}
              isDrinks={isDrinks}
            />
          ))}
        </>
      ) : (
        <p className="text-center col-span-2 py-10 text-gray-500">
          Nessuna pizza trovata in questa categoria.
        </p>
      )}
    </div>
  );
}

export default GridItems;
