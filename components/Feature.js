const Feature = ({ blok }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-medium">{blok.name}</h2>
      <p className="text-center mt-3">{blok.description}</p>
    </div>
  );
};

export default Feature;
