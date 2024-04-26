import * as signalR from "@microsoft/signalr";
import { TOKEN } from "@/utils/constants";

class SignalRManager {
  constructor() {
    this.eventListeners = {};
    this.connection = null;
    this.initConnection();
  }

  initConnection() {
    const { settingStore, rootStore } = useStores();
    const token = getItem(TOKEN);
    let userInfo = {};
    if (token) {
      userInfo = getJWTToken(token);
    }
    const autoReconnect = Array.from({ length: 120 }, () => 5000);

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect(autoReconnect)
      .configureLogging(signalR.LogLevel.Error)
      .build();
    this.connection.onreconnected(() => {
      console.log("SignalR Connection Reconnected");
      rootStore.connectionId = this.connection.connectionId;
    });
  }

  startConnection() {
    if (this.connection.state === "Connected") {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.connection
        .start()
        .then(() => {
          console.log("SignalR Connection Connected");
          resolve();
        })
        .catch((err) => {
          console.error("SignalR Connection Error: ", err);
          reject(err);
        });
    });
  }

  startListening(eventName, callback) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = callback;
      this.connection.on(eventName, callback);
    }
  }

  stopListening(eventName) {
    if (this.eventListeners[eventName]) {
      this.connection.off(eventName, this.eventListeners[eventName]);
      delete this.eventListeners[eventName];
    }
  }

  stopConnection() {
    this.connection
      .stop()
      .then(() => {
        this.eventListeners = {};
        console.log("SignalR Connection Stopped");
      })
      .catch((err) => {
        console.error("Error stopping SignalR Connection: ", err);
      });
  }
}

const signalRManager = new SignalRManager();
export default signalRManager;
