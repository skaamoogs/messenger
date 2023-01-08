import Block from "../modules/block";
import { Indexed } from "../utils/types";
import store, { StoreEvents } from "../utils/store";
import { State } from "../utils/interfaces";

function withStore(mapDataToProps: (state: State) => Indexed) {
  return function wrap(Component: typeof Block) {
    return class WithStore extends Component {
      constructor(props: Indexed) {
        super({ ...props, ...mapDataToProps(store.getState()) });

        store.on(StoreEvents.Updated, () => {
          this.setProps({ ...mapDataToProps(store.getState()) });
        });
      }
    };
  };
}

export default withStore;
