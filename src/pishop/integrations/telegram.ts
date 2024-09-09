// import { Bot } from "grammy";
// import { LocalOrder } from "../logic";
// import { StoreModel } from "../models";

// // class [Integration] is a base class for all integrations
// // it has a method called "init" that is called when the app is initialized
// abstract class StoreIntegration {
//     abstract name: string;
//     abstract inited: boolean;
//     abstract active: boolean;

//     init(): Promise<void> {
//         this.inited = this.active;
//         return Promise.resolve();
//     }
// }

// // Integration of telegram bot
// export default class TelegramIntegration extends StoreIntegration {
//     name = 'telegram';
//     token: string;
//     chatId: string;
//     inited = false;
//     active: boolean;
//     template: string;
//     constructor({ token, chatId, active, template }: { token: string, chatId: string, active: boolean, template: string }) {
//         super();
//         this.token = token;
//         this.chatId = chatId;
//         this.active = active;
//         this.template = template;
//         this.bot = new Bot(token);
//     }


//     private bot: Bot;
//     async init() {
//         super.init();
//     }

//     async sendMessage(message: string): Promise<void> {
//         if (!this.active) return;
//         try {
//             await this.bot.api.sendMessage(this.chatId, message);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     async sendOrder(_store: StoreModel, _localOrder: LocalOrder): Promise<void> {
//         if (!this.active) return;
//         // var message = this.template
//         //     .replace(/\{id\}/g, localOrder.id)
//         //     .replace(/\{address\}/g, localOrder.shipping?.doorShipping ? (localOrder.shipping?.address.street ?? "--") : "التوصيل لمكتب الولاية")
//         //     .replace(/\{phone\}/g, localOrder.shipping?.phone || "لا رقم")
//         //     .replace(/\{name\}/g, localOrder.shipping?.name || "لا اسم")
//         //     .replace(/\{notes\}/g, localOrder.shipping?.notes || "لا ملاحظة")
//         //     .replace(/\{state\}/g, localOrder.shipping?.address.state || "لا ولاية")
//         //     .replace(/\{city\}/g, localOrder.shipping?.address.city || "لا بلدية")
//         //     .replace(/\{products\}/g, localOrder.items.map(item => `${item.product.name} ${item.variants.join("-")}\n - الكمية:(x${item.quantity})`).join("\n"))
//         //     .replace(/\{shipping\}/g, calculateLocalOrderShipping(store, localOrder).toFixed(0))
//         //     .replace(/\{total\}/g, calculateLocalOrderTotal(store, localOrder).toFixed(0))
//         //     .replace(/\{cost\}/g, calculateLocalOrderTotal(store, localOrder, false).toFixed(0))
//         // await this.sendMessage(message)
//     }
// }