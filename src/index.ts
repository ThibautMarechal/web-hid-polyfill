if (typeof navigator !== "undefined" && !navigator.hid) {
  class HID_polyfill implements HID {
    onconnect: ((this: this, ev: Event) => any) | null = null;
    ondisconnect: ((this: this, ev: Event) => any) | null = null;
    getDevices(): Promise<HIDDevice[]> {
      return Promise.resolve([]);
    }
    requestDevice(options?: HIDDeviceRequestOptions): Promise<HIDDevice[]> {
      return Promise.resolve([]);
    }
    addEventListener(
      type: unknown,
      listener: unknown,
      options?: unknown
    ): void {}
    removeEventListener(
      type: unknown,
      callback: unknown,
      options?: unknown
    ): void {}
    dispatchEvent(event: Event): boolean {
      return true;
    }
  }
  // @ts-ignore;
  navigator.hid = new HID_polyfill();
}
