// import * as signalR from "@microsoft/signalr";
// import { TOKEN } from "@/utils/constants";
// import { getJWTToken } from "@/utils/otherMethod";
// import { getItem } from "@/utils/storage";
// import { getHost } from "@/utils/request.js";
// import useStores from "@/store/modules";

// class SignalRManager {
//   constructor() {
//     const { settingStore } = useStores();
//     const token = getItem(TOKEN);
//     let userInfo = {};
//     if (token) {
//       userInfo = getJWTToken(token);
//     }
//     const autoReconnect = [];
//     for (let index = 0; index < 120; index++) {
//       autoReconnect.push(5000);
//     }
//     this.connection = new signalR.HubConnectionBuilder()
//       .withUrl(
//         getHost() +
//           `/StorageLocationHubService?language=${settingStore.language}&userName=${userInfo.UserName}&account=${userInfo.name}`,
//         {}
//       )
//       .withAutomaticReconnect(autoReconnect)
//       .configureLogging(signalR.LogLevel.Error)
//       .build();

//     this.eventListeners = {};
//     this.startConnection();
//   }
//   startConnection() {
//     this.connection
//       .start()
//       .then(() => {
//         console.log("SignalR Connection Connected");
//       })
//       .catch((err) => {
//         console.error("SignalR Connection Error: ", err);
//       });
//   }
//   startListening(eventName, callback) {
//     if (!this.eventListeners[eventName]) {
//       this.eventListeners[eventName] = callback;
//       this.connection.on(eventName, callback);
//     }
//   }
//   stopListening(eventName) {
//     if (this.eventListeners[eventName]) {
//       this.connection.off(eventName, this.eventListeners[eventName]);
//       delete this.eventListeners[eventName];
//     }
//   }
//   stopConnection() {
//     this.connection
//       .stop()
//       .then(() => {
//         console.log("SignalR Connection Stopped");
//       })
//       .catch((err) => {
//         console.error("Error stopping SignalR Connection: ", err);
//       });
//   }
// }
// const signalRManager = new SignalRManager();
// export default signalRManager;

import * as signalR from "@microsoft/signalr";
import { TOKEN } from "@/utils/constants";
import { getJWTToken } from "@/utils/otherMethod";
import { getItem } from "@/utils/storage";
import { getHost } from "@/utils/request.js";
import useStores from "@/store/modules";

class SignalRManager {
  constructor() {
    this.eventListeners = {};
    this.connection = null;
    this.initConnection();
  }

  initConnection() {
    const { settingStore } = useStores();
    const token = getItem(TOKEN);
    let userInfo = {};
    if (token) {
      userInfo = getJWTToken(token);
    }
    const autoReconnect = Array.from({ length: 120 }, () => 5000);

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(
        getHost() +
          `/StorageLocationHubService?language=${settingStore.language}&userName=${userInfo.UserName}&account=${userInfo.name}`,
        {}
      )
      .withAutomaticReconnect(autoReconnect)
      .configureLogging(signalR.LogLevel.Error)
      .build();
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
