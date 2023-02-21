import { connect } from "react-redux";
import componentRoutes from "./componentRoutes";

const mSTP = (state) => ({
  user: state.entities.users[state.session.id],
});

export default connect(mSTP, null)(componentRoutes);