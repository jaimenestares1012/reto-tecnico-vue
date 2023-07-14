export default ({ store }, inject) => {
    inject('showError', (data) => {
      store.dispatch('alerts/open', data);
    });
    inject('showSpinner', (value) => {
    console.log("showSpinner");
      store.commit('SET_ISLOADING', value);
    });
  };
  