function ButtonClickEvent() {

  const showAlert = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}
export default ButtonClickEvent;