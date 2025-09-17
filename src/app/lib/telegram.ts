import TelegramBot from 'node-telegram-bot-api';

class TelegramService {
  private bot: TelegramBot | undefined;
  private chatId: string;

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    this.chatId = process.env.TELEGRAM_CHAT_ID!;

    if (!token || !this.chatId) {
      console.warn('Telegram token or chat ID not set');
      return;
    }

    this.bot = new TelegramBot(token, { polling: false });
  }

   private cleanPhone(phone: string): string {
    let cleaned = phone.replace(/[^\d+]/g, '');
    
    if (cleaned.startsWith('8')) {
      cleaned = '+7' + cleaned.slice(1);
    } else if (cleaned.length === 10 && !cleaned.startsWith('+')) {
      cleaned = '+7' + cleaned;
    } else if (cleaned.startsWith('7') && cleaned.length === 11) {
      cleaned = '+' + cleaned;
    }
    
    return cleaned;
  }

  async sendContactForm(data: {
    name: string;
    phone: string;
    method?: "call" | "whatsapp" | "telegram";
  }) {
    try {
      if (!this.bot) {
        console.warn('Telegram bot not initialized');
        return false;
      }
      
      const cleanedPhone = this.cleanPhone(data.phone);
      const message = `
🎯 *НОВАЯ ЗАЯВКА С САЙТА*

👤 *Имя:* ${data.name}
📞 *Телефон:* \`${cleanedPhone}\`
${data.method ? `💬 *Способ связи:* ${data.method}` : ''}

⏰ *Время:* ${new Date().toLocaleString('ru-RU')}
      `.trim();

      await this.bot.sendMessage(this.chatId, message, {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '💬 Написать в WhatsApp',
                url: `https://wa.me/${cleanedPhone}`
              }
            ],
            [
              {
                text: '💬 Написать в Telegram',
                url: `https://t.me/${cleanedPhone}`
              }
            ]
          ]
        }
      });

      return true;
    } catch (error) {
      console.error('Error sending Telegram message:', error);
      return false;
    }
  }

  async sendAdminNotification(message: string) {
    try {
      if (!this.bot || !process.env.TELEGRAM_ADMIN_CHAT_ID) return;

      await this.bot.sendMessage(process.env.TELEGRAM_ADMIN_CHAT_ID, message, {
        parse_mode: 'Markdown'
      });
    } catch (error) {
      console.error('Error sending admin notification:', error);
    }
  }
}

export const telegramService = new TelegramService();