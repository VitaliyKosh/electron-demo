import { Notification } from "electron";

export default () => {
  new Notification({
    title: 'Ой, а что это?',
    body: 'Это уведомление, отправленное с помощью Notification API',
  }).show();
}