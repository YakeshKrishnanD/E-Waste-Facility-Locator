export function Button({ children, className, onClick }) {
    return (
      <button className={`p-2 rounded-lg text-white ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }

  