class Shipping {
  request() {
    //...
    return 49.5;
  }
}

class AdvancedShipping {
  login(credentials) {
    return true;
  }

  setStart(start) {
    return start;
  }

  setDestination(destination) {
    return destination;
  }

  calculateWeight(weight) {
    return 2 * weight;
  }
}

/*
 * Shipping and AdvancedShipping are 2 different objects unrelated to each other and the ShippingAdapter is using the same signature "request()" as * the Shipping
 */
class ShippingAdapter {
  constructor() {
    this.shipping = new AdvancedShipping();
  }

  request() {
    return (
      this.shipping.calculateWeight(2) +
      this.shipping.setDestination(1) +
      this.shipping.setStart(3)
    );
  }
}

const shippingAdapter = new ShippingAdapter();

console.log(shippingAdapter.request());
