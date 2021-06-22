import { useEffect } from "react";
import { connect } from "react-redux";
import { HeaderComponent } from "../../common/components/header/header-component";
import { increment, decrement } from "../account/account.actions";
import { bindActionCreators } from "redux";
import { getMovieList } from "../login/login.actions";

function Account(props: any) {

  useEffect(() => { getMovieList() }, [])
  console.log("Props Account", props)
  
  return (
    <div>
      <HeaderComponent />
        Test account
        Count: {props.count}
        <button onClick={() => props.decrement(5)}>-Decrement</button>
      <button onClick={() => props.increment(5)}>+Increment</button>
    </div>
  )
}

const mapStateToProps = (state:any) => ({
...state.accounts
});

const mapDispatchToProps = (dispatch:any) => ({
  ...bindActionCreators({decrement, increment, getMovieList}, dispatch)
})
export const AccountPage  = connect(mapStateToProps, mapDispatchToProps)(Account)