import "@/styles/globals.css";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import { persistor, store } from "@/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </PersistGate>
      </Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        stacked
      />
    </>
  );
}
