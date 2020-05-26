import { Notifications } from "expo";
import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";
const NOTIFICATION_STORAGE_KEY = "Shaurya:Notification:cards";

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY);
  await Notifications.cancelAllScheduledNotificationsAsync();
};

export const getTomorrowAt8pm = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  return tomorrow;
};

export const createNotification = () => {
  return {
    title: "Answer a quiz",
    body: "⏰ Don`t forget to complete a quiz today",
    android: {
      sound: true,
      vibrate: true,
      sticky: false,
      priority: "high",
    },
  };
};

export const setLocalNotification = async () => {
  const json = await AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY);
  const data = JSON.parse(json);

  if (data === null) {
    const status = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === "granted") {
      await Notifications.cancelAllScheduledNotificationsAsync();
      const tomorrow = getTomorrowAt8pm();
      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day",
      });

      AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true));
    }
  }
};
