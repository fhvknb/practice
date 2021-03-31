import { isObjectValueEqual } from "../utils";

const CustomerHooksDeps = {
  useEffectDeepData: null,
};

export function useEffectDeep(cb, data) {
  if (!CustomerHooksDeps.useEffectDeepData) {
    CustomerHooksDeps.useEffectDeepData = data;
  }
  if (isObjectValueEqual(CustomerHooksDeps.useEffectDeepData, data)) {
    return;
  } else {
    CustomerHooksDeps.useEffectDeepData = data;
    cb();
  }
}
