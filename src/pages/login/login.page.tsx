import { useHistory } from "react-router-dom";
import { Button } from "../../common/components/button/button";
import { HeaderComponent } from "../../common/components/header/header-component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {decrement, increment} from "./login.actions"

export function Login(props:any) {
  const history = useHistory();

  const handleClick = () => {
    history.push("./account")
  }

  return (
    <div>
      <HeaderComponent />
      <div className="login-body">
        <div className="login-left">
          <Button text="Login" onClick={handleClick} />
        </div>
        <>
      Count: {props.login.count}
      <button onClick={() => props.decrement()}>-</button>
      <button onClick={() => props.increment()}>+</button>
    </>
      </div>
      
    </div>
  )
}
const mapStateToProps = (state:any) => ({
  ...state
});

const mapDispatchToProps = (dispatch:any) => ({
  ...bindActionCreators({decrement, increment}, dispatch)
});

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);