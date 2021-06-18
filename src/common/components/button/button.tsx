import "./button.scss";

interface ButtonUI {
  text: string;
  onClick: any;
}

export function Button(props: ButtonUI) {
  const { text, onClick } = props
 
  return (
    <button className="button" onClick={onClick} >
      {text}
    </button>
  )
}
