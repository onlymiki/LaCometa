function Item({ title, ingredients, price1, price2, isDrinks }) {
  return (
    <>
      <div className="flex items-center px-6">
        <div className="flex flex-col w-full">
          <h6 className="md:text-2xl font-bold mb-2 text-orange-600 font-['Krona_One']">
            {title}
          </h6>
          <p className="text-gray-700">{ingredients}</p>
        </div>
        <div className="flex w-full justify-end gap-6">
          <h6 className="text-gray-700 mb-6">{price1}</h6>
          {!isDrinks && <h6 className="text-gray-700 mb-6">{price2}</h6>}
        </div>
      </div>
    </>
  );
}

export default Item;
