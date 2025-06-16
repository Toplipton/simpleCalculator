

function Button({onClick, children, className}) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 text-lg font-semibold rounded-xl focus:outline-none shadow-sm active:scale-95 transition duration-150 ease-in-out ${className}`}
      >
        {children}
      </button>
    );
  }

  export default Button;
  