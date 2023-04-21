import { systemPreferences } from "electron";

export default async () => {
    try {
        await systemPreferences.promptTouchID('проверка touchId')
        return true
    } catch (e) {
        return false
    }
}