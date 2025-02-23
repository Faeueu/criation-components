'use client';

const Button = () => {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-9 py-4 rounded-lg shadow-md transition-all duration-300"
      onClick={handleClick}
    >
      Clique Aqui
    </button>
  );
};

export default Button;
