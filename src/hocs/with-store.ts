import Block from "../modules/block";
import { Indexed } from "../utils/types";
import store, { StoreEvents } from "../utils/store";
import { State } from "../utils/interfaces";
import { isEqual } from "../utils/helpers";

function withStore(mapDataToProps: (state: State) => Indexed) {
  return function wrap(Component: typeof Block) {
    return class WithStore extends Component {
      constructor(props: Indexed) {
        let previousState = mapDataToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapDataToProps(store.getState());
          if (!isEqual(previousState, stateProps)) {
            previousState = stateProps;
            this.setProps({ ...stateProps });
          }
        });
      }
    };
  };
}

export default withStore;
