const Button = ({ title, onClick }) => {
  return (
    <a
      href={onClick}
      className="max-sm:px-8 px-3 py-2 text-white bg-[#0091FF] rounded-3xl"
    >
      {title}
    </a>
  );
};

export default Button;
