import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51M1l4WSGJLP0umN5s4SLhvWXxdrwjZ8Hv82s6ELErs2NgfQHt5PaBXSIeXoQsW2VkVr5C4Rt8AkmMbL4ojT08Wp100JRGFBVMV"
    );
  }

  return stripePromise;
};

export default getStripe;
