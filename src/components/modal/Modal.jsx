const Modal = (props) => {
  const { isOpen, onClose, children } = props;
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-[500px] min-h-100 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 cursor-pointer"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
