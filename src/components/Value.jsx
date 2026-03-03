function Value({ icon, title, description }) {
  return (
    <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h5 className="text-lg font-['Krona_One'] text-gray-800 mb-3">{title}</h5>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default Value;
