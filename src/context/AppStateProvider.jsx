import { UiProvider } from "./UiContext";
// import { AuthProvider } from "./AuthContext"; <-- Easily add this later
// import { CartProvider } from "./CartContext"; <-- Easily add this later

const AppStateProvider = ({ children }) => {
  return (
    <UiProvider>
      {/* <AuthProvider> */}
      {/* <CartProvider> */}
      {children}
      {/* </CartProvider> */}
      {/* </AuthProvider> */}
    </UiProvider>
  );
};

export default AppStateProvider;
