export default function reducer(state = initialState, action) {
  if (action.type === "ADD_URL") {
    state.navigation.pathname = action.payload;

    return { ...state };
  }
  if (action.type === "SHOW_CLOSE_MOBILE_FILTER") {
    if (state.sidebar.classes.classSideBar === "side_bar")
      state.sidebar.classes.classSideBar = "side_bar active";
    else state.sidebar.classes.classSideBar = "side_bar";

    return { ...state };
  }
  if (action.type === "CLOSE_MOBILE_FILTER") {
    if (state.sidebar.classes.classSideBar === "side_bar active")
      state.sidebar.classes.classSideBar = "side_bar";

    return { ...state };
  }

  if (action.type === "CHANGE_MENU_BUTTON_CLASS") {
    if (action.payload.className === "") {
      state.navigation.classes.classButton = "active";

      state.navigation.classes.headerClassName =
        state.navigation.classes.headerClassName + " active";
    }

    if (action.payload === "active" && window.innerWidth < 900) {
      state.navigation.classes.classButton = "";

      state.navigation.classes.headerClassName =
        state.navigation.classes.headerClassName + " active";
    }

    if (action.payload === "" && window.innerWidth < 900) {
      state.navigation.classes.classButton = "active";

      state.navigation.classes.headerClassName = "";
    }

    return { ...state };
  }

  if (action.type === "CHANGE_HEADER_CLASS") {
    state.navigation.classes.headerClassName = action.payload;

    return { ...state };
  }
  if (action.type === "RETURN_CLASSES") {
    let header = state.navigation.classes.headerClassName;
    // button = state.navigation.classes.classButton;

    state.navigation.classes.headerClassName = header.substr(
      0,
      header.length - 7
    );

    state.navigation.classes.classButton = "active";

    return { ...state };
  }
  if (action.type === "CHANGE_MOBILE_HEADER_CLASS") {
    if (action.payload === "active") return { ...state };
  }
  if (action.type === "SHOW_TYPE_LIST_ASIDE") {
    if (action.payload === "products_types") {
      state.sidebar.classes.classTypesList = "products_types show";
    } else state.sidebar.classes.classTypesList = "products_types";

    if (state.sidebar.categories.activeItem.className === "")
      state.sidebar.categories.activeItem.className = "show";
    else state.sidebar.categories.activeItem.className = "";

    return { ...state };
  }

  if (action.type === "CHANGE_ACTIVE_ITEM") {
    state.sidebar.categories.items.map(item => {
      if (item.id === action.payload) {
        state.sidebar.categories.activeItem = item;
        state.sidebar.filter.type = item.id;
      }
    });

    return { ...state };
  }
  if (action.type === "ADD_INFO_TO_FILTER") {
    if (action.payload.strim === "from")
      state.sidebar.filter.from = +action.payload.value;
    if (action.payload.strim === "to")
      state.sidebar.filter.to = +action.payload.value;

    return { ...state };
  }
  if (action.type === "MODAL_WINDOW") {
    if (action.payload.type === "object") {
      state.modalWindow.windowOfProduct.opened = true;
      state.modalWindow.windowOfProduct.content = action.payload.content;
    } else if (action.payload.type === "array") {
      state.modalWindow.windowOfBasket.opened = true;
      state.modalWindow.windowOfBasket.content = action.payload.content;
    } else {
      state.modalWindow.windowOfProduct.opened = false;
      state.modalWindow.windowOfBasket.opened = false;
    }

    return { ...state };
  }

  if (action.type === "CHANGE_AMMOUNT") {
    let newObj = state.productList.items.filter(item => {
      if (item.name === action.payload.name)
        item.ammount = +action.payload.ammount;

      return item;
    });

    state.productList.items = [...newObj];

    return { ...state };
  }
  if (action.type === "ADD_TO_BASKET") {
    let result = state.productList.items.reduce(
      (sum, item) => {
        if (item.ammount !== 0) {
          sum.quantity += item.ammount;
          sum.price += item.ammount * item.price;
        }

        return sum;
      },
      {
        quantity: 0,
        price: 0
      }
    );
    state.sidebar.basket.result = result;

    return { ...state };
  }
  if (action.type === "DELETE_BASKET_ITEM") {
    let filter = state.productList.items.filter(item => {
      if (item.name === action.payload) item.ammount = 0;

      if (item.ammount !== 0) return item;
    });

    state.modalWindow.windowOfBasket.content = filter;

    return { ...state };
  }
  if (action.type === "CLEAR_BASKET") {
    let newObj = state.productList.items.filter(item => {
      if (item.ammount !== 0) {
        item.ammount = 0;
      }

      return item;
    });

    state.productList.items = newObj;

    return { ...state };
  }
  if (action.type === "OPEN_SUCCESS_WINDOW") {
    if (state.modalWindow.windowOfSaled.opened) {
      state.modalWindow.windowOfSaled.opened = false;
      state.modalWindow.windowOfSaled.success.bool = false;
      state.modalWindow.windowOfSaled.errror.bool = false;
      state.modalWindow.windowOfSaled.successCont.bool = false;
      state.modalWindow.windowOfSaled.fieldError.bool = false;
    } else {
      state.modalWindow.windowOfSaled.opened = true;

      if (action.payload === 200) {
        state.modalWindow.windowOfSaled.success.bool = true;
      } else if (action.payload.status === 200) {
        state.modalWindow.windowOfSaled.successCont.bool = true;
      } else if (action.payload === "field_error") {
        state.modalWindow.windowOfSaled.fieldError.bool = true;
      } else state.modalWindow.windowOfSaled.errror.bool = true;
    }

    return { ...state };
  }

  return state;
}
